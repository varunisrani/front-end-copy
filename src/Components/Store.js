import create from "zustand";

const useStore = create((set) => ({
  lok: 0,
  cart: [],
  increase: () =>
    set((state) => ({
      lok: state.lok + 1,
    })),
  decrease: () =>
    set((state) => ({
      // Changed from set(() => ({
      lok: state.lok - 1,
    })),
  remove: () =>
    set(() => ({
      lok: 0,
    })),
  addcart: (item) =>
    set((state) => ({
      cart: [...state.cart, item],
    })),
}));

export default useStore;
