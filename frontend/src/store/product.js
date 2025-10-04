import { create } from 'zustand';

export const useProductStore = create((set) =>({
    products: [],
    minPrice: "",
    maxPrice: "",
    minPopularity: "",
    loading: false,
    setMinPrice: (minPrice) => set({ minPrice }),
    setMaxPrice: (maxPrice) => set({ maxPrice }),
    setMinPopularity: (minPopularity) => set({ minPopularity }),

    fetchProducts: async (filters = {}) => {
      set({loading: true})
      const qs = new URLSearchParams();
      Object.entries(filters).forEach(([k, v]) => {
        
      if (v !== undefined && v !== null && v !== "") {
          qs.set(k, v);
        }
      });

      const url = qs.toString() 
        ? `/api/products?${qs.toString()}` 
        : `/api/products`;

      const res = await fetch(url);
      const data = await res.json()
      
      set({ products: data.data, loading:false })
      },
}))
