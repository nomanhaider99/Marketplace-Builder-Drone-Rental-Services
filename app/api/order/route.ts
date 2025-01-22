import { client } from '@/sanity/lib/client';

export async function POST(request: Request) {
    try {
        const {
            userId,
            productName,
            price,
            category,
            image,
        } = await request.json();

        const addedProduct = await client.create({
            _type: 'order',
            userId,
            productName,
            price,
            category,
            image: {
                _type: 'image',
                asset: {
                    _type: 'reference',
                    _ref: image,
                },
            },
        });

        return new Response(JSON.stringify({ message: 'Product added to cart successfully', product: addedProduct }));
    } catch (error: any) {
        return new Response(JSON.stringify({ message: 'Failed to add product to cart', error: error.message }));
    }
}
