import { create } from "zustand";

interface useCategoryType {
  category: string;
  setCategory: (newCategory: string) => void;
}

const useCategory = create<useCategoryType>((set) => ({
  category: "",
  setCategory: (newCategory: string) => {
    set({ category: newCategory });
  },
}));

export default useCategory;
