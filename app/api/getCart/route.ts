import { auth } from "@/auth";
import { client } from "@/sanity/lib/client";
import { OrderType } from "@/types/order";
import { NextResponse } from "next/server";

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
            "imageUrl": image.asset->url
        }
        `;

        const orders: OrderType[] = await client.fetch(query, { userId });

        return NextResponse.json(orders)
    } catch (error) {

    }
}