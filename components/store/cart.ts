import { create } from 'zustand';
import { OrderType } from '@/types/order';
import { FieldValues } from 'react-hook-form';

interface CartState {
    userId: string | null;
    cart: OrderType[];
    subtotal: number;
    loading: boolean;
    fetchCartData: () => Promise<void>;
    addToCart: (data: FieldValues) => Promise<void>;
}

export const useCartStore = create<CartState>((set) => ({
    userId: null,
    cart: [],
    subtotal: 0,
    loading: true,

    fetchCartData: async () => {
        try {
            set({ loading: true });

            const [userResponse, cartResponse] = await Promise.all([
                fetch('/api/user'),
                fetch('/api/getCart'),
            ]);

            const userData = await userResponse.json();
            const cartData: OrderType[] = await cartResponse.json();

            const userId = userData.user?.name || null;

            if (userId) {
                const subtotal = cartData.reduce((acc, item) => acc + item.price, 0);

                set({
                    userId,
                    cart: cartData,
                    subtotal,
                    loading: false,
                });
            } else {
                set({ userId: null, cart: [], subtotal: 0, loading: false });
            }
        } catch (error) {
            console.error('Error fetching cart data:', error);
            set({ loading: false });
        }
    },
    addToCart: async (data: FieldValues) => {
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
    }
}));
