import { client } from '@/sanity/lib/client';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const {
            userId,
            productName,
            description,
            price,
            category,
            image,
            quantity
        } = await request.json();

        const imageBuffer = await fetchImageBuffer(image);
        if (!imageBuffer) {
            return NextResponse.json(
                { error: "Failed to fetch and buffer the image" },
                { status: 400 }
            );
        }

        const uploadedImage = await client.assets.upload('image', imageBuffer, {
            filename: 'product-image.jpg',
        });

        const addedProduct = await client.create({
            _type: 'order',
            userId,
            productName,
            price,
            description,
            category,
            quantity,
            image: {
                _type: 'image',
                asset: {
                    _type: 'reference',
                    _ref: uploadedImage._id,
                },
            },
        });

        return NextResponse.json({
            message: 'Product added to cart successfully',
            product: addedProduct,
        });
    } catch (error: any) {
        return NextResponse.json(
            {
                message: 'Failed to add product to cart',
                error: error.message || 'Unknown error',
            },
            { status: 500 }
        );
    }
}

async function fetchImageBuffer(imageUrl: string): Promise<Buffer | null> {
    try {
        const response = await fetch(imageUrl);
        if (!response.ok) {
            console.error("Failed to fetch image from URL:", response.statusText);
            return null;
        }
        return Buffer.from(await response.arrayBuffer());
    } catch (error) {
        console.error("Error fetching image:", error);
        return null;
    }
}
