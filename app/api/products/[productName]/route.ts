import { client } from "@/sanity/lib/client";

export async function GET(
    request: Request,
    { params }: { params: Promise<{ productName: string }> }
) {
    const productName = (await params).productName
    try {
        console.log("API Id: ", productName);
        if (!productName) {
            throw new Error("Id Not Found")
        }

        const query = `
            *[_type == "product" && productName == $productName][0] {
                _id,
                productName,
                category,
                price,
                inventory,
                colors,
                status,
                "imageUrl": image.asset->url,
                description
            }
        `;

        const data = await client.fetch(query, { productName });

        if (!data) {
            throw new Error("Product Not Found")
        }

        // Return the product data in JSON format with status 200
        return new Response(
            JSON.stringify(data),
            { status: 200, headers: { "Content-Type": "application/json" } }
        );

    } catch (error) {
        console.error(error);
        // Return a JSON response with status 500 in case of an error
        return new Response(
            JSON.stringify({ message: "Failed to fetch product" }),
            { status: 500, headers: { "Content-Type": "application/json" } }
        );
    }
}
