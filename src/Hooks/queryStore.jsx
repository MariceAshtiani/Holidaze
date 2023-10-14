import { create } from "zustand";

export const useQueryStore = create((set) => ({
    query: [],
    setQuery: (newQuery) => set({ query: newQuery }),
}));