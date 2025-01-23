export const deleteCart = async (id: string) => {
    try {
        const response = await fetch('/api/delete', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id }),
        });
        if (!response.ok) {
            const errorData = await response.json();
            console.error('Error Response:', errorData);
            throw new Error(errorData.message || 'Failed to add product to cart');
        }
    } catch (error) {
        console.error('Fetch Error:', error);
    }
};
