import { create } from 'zustand';

const useStore = create((set) => ({
  // --- Products State ---
  product: [],
  refP: false,
  
  // --- Categories State ---
  category: [],
  refC: false,

  // --- Actions ---
  fetchProducts: async () => {
    set({ refP: true });
    try {
      const res = await fetch('/json/data/products.json');
      const data = await res.json();
      set({ product: data, refP: false });
    } catch (err) {
      set({ refP: false });
      console.error("Mahsulotlarni yuklashda xato:", err);
    }
  },

  fetchCategories: async () => {
    set({ refC: true });
    try {
      const res = await fetch('/json/data/categories.json');
      const data = await res.json();
      set({ category: data, refC: false });
    } catch (err) {
      set({ refC: false });
      console.error("Kategoriyalarni yuklashda xato:", err);
    }
  }
}));

export default useStore;