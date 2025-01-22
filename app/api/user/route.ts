import { NextResponse } from 'next/server';
import { auth } from '@/auth';

export async function GET(request: Request) {
    try {
        const session = await auth();
        return NextResponse.json({ user: session?.user || null });
    } catch (error: any) {
        return NextResponse.json({ error: error.message || 'An error occurred' }, { status: 500 });
    }
}
