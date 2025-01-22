import { FieldValues } from "react-hook-form";

export const addToCart = async (data: FieldValues) => {
    try {
        const response = await fetch('/api/order', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
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
