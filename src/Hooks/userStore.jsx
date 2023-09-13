import { create } from "zustand";

export const useUserStore = create((set) => ({
    user: null,
    isLoggedIn: false, // Add a flag for logged in status
    isVenueManager: false, // Add a flag for venue manager status
    setUser: (user) => set({ user, isLoggedIn: true }), //Update user and set isLoggedIn to true
    setVenueManger: (isVenueManager) => set({ isVenueManager }),
}));