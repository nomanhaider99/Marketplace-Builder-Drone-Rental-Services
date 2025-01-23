import { client } from "@/sanity/lib/client";

export async function DELETE(request: Request) {
    try {
        const { id } = await request.json();

        if (!id) {
            return new Response(JSON.stringify({ message: "Product name is required" }), { status: 400 });
        }

        const deletedProduct = await client.delete({
            query: `*[_type == "order" && productName == $id][0].productName`,
            params: { id },
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
