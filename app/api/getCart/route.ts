import { auth } from "@/auth";
import { client } from "@/sanity/lib/client";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
    try {
        const session = await auth();
        const userId = session?.user?.name;

        const query = `*[_type == "order" && userId == $userId] {
            _id,
            productName,
            description,
            price,
            category,
            "imageUrl": image.asset->url,
            quantity
        }
        `;

        const orders = await client.fetch(query, { userId });

        return NextResponse.json(orders)
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}