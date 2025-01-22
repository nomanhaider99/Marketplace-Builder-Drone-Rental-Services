import { client } from '@/sanity/lib/client';
import { v4 as uuidv4 } from 'uuid';
import bcrypt from 'bcryptjs'

export async function POST(request: Request) {
    try {
        const { name, email, password } = await request.json();

        const hashedPassword = await bcrypt.hash(password, 15);

        const newUser = {
            _type: 'user',
            _id: uuidv4(),
            name,
            email,
            password: hashedPassword,
        };

        await client.create(newUser);

        return new Response(JSON.stringify({ message: 'User created successfully' }), {
            status: 201,
        });
    } catch (error: any) {
        return new Response(JSON.stringify({ message: 'Failed to create user', error: error.message }), {
            status: 500,
        });
    }
}
