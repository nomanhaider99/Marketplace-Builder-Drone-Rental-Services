// stores/cartStore.ts
import { create } from 'zustand';
import { OrderType } from '@/types/order'; // Update the path to your types

interface CartState {
  userId: string | null;
  cart: OrderType[];
  subtotal: number;
  loading: boolean;
  fetchCartData: () => Promise<void>;
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
}));
