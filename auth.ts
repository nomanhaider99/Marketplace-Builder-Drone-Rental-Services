import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { client } from "@/sanity/lib/client";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          console.error("Missing credentials");
          throw new Error("Invalid credentials!");
        }

        try {
          const query = `*[_type == "user" && email == $email][0]`;
          const user = await client.fetch(query, { email: credentials.email });

          if (!user) {
            console.error("User not found");
            throw new Error("Invalid credentials!");
          }

          const isPasswordValid = await bcrypt.compare(
            credentials.password as any,
            user.password
          );

          if (!isPasswordValid) {
            console.error("Invalid password");
            throw new Error("Invalid credentials!");
          }

          return user; 
        } catch (error) {
          console.error("Authentication error:", error);
          throw new Error("An error occurred during login");
        }
      },
    }),
  ],
  session: {
    strategy: "jwt", 
  },
  pages: {
    signIn: "/login",
  },
  secret: process.env.NEXTAUTH_SECRET, 
});
