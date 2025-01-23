import { addToCart } from "@/app/actions/addToCart";
import { ProductType } from "@/types/product";
import { FieldValues } from "react-hook-form";
import { create } from "zustand";

interface useCartStoreProps {
    cart: ProductType[],
    addToCart: (data: FieldValues) => void,
}

const useCartStore = create<useCartStoreProps>(() => ({
    cart: [],
    addToCart: addToCart,
}));

export default useCartStore;