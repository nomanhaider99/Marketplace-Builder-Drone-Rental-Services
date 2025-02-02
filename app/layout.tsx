import type { Metadata } from "next";
import "./globals.css";
import SecondaryHeader from "@/components/layouts/SecondaryHeader";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
import SecondaryFooter from "@/components/layouts/SecondaryFooter";
import { Toaster } from 'react-hot-toast'

export const metadata: Metadata = {
  title: "Marketplace-Builder",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`w-full`}
      >
        <Toaster />
        <div className="w-full min-h-screen flex flex-col justify-between">
          <div>
            <SecondaryHeader />
            <Header />
          </div>
          <div>{children}</div>
          <div>
            <Footer />
            <SecondaryFooter />
          </div>
        </div>
      </body>
    </html>
  );
}
