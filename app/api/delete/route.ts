import { client } from "@/sanity/lib/client";

export async function POST(request: Request) {
    try {
        const { productName } = await request.json();

        if (!productName) {
            return new Response(JSON.stringify({ message: "Product name is required" }), { status: 400 });
        }

        const deletedProduct = await client.delete({
            query: `*[_type == "order" && productName == $productName][0]._id`,
            params: { productName },
        });

        return new Response(JSON.stringify({ message: "Product deleted successfully", deletedProduct }), {
            status: 200,
        });
    } catch (error: any) {
        console.error("Error deleting product:", error);
        return new Response(JSON.stringify({ message: "Failed to delete product", error: error.message }), {
            status: 500,
        });
    }
}
