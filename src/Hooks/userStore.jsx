import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";

export const useUserStore = create(
    devtools(
        persist(
            (set) => ({
                user: null,
                profile: null,
                bookings:[],
                venues: [],
                isLoggedIn: false, 
                isVenueManager: false,
                accessToken: null,
                setUser: (user) => set({ user, isLoggedIn: true }), //Update user and set isLoggedIn to true
                setUserProfile: (profile) => set({ profile }),
                setBookings: (bookings) => set({ bookings }),
                setVenues: (venues) => set({ venues }),
                setVenueManager: (isVenueManager) => set({ isVenueManager }),
                setAccessToken: (token) => set({ accessToken: token }),
                logout: () => set({ user: null, isLoggedIn: false, isVenueManager: false, profile: null, bookings: [], venues: [], accessToken: null }),
            }),
            { name : "store" }
        )
    )
);