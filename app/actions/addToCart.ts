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

        const result = await response.json();
        console.log('Product added to cart successfully:', result);
        return result; 
    } catch (error: any) {
        console.error('Fetch Error:', error.message || error);
        throw error; 
    }
};
