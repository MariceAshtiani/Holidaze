import { useEffect, useState } from "react";
import { profileUrl } from "../Api/constants";
import { useUserStore } from "../Hooks/userStore";

export function useFetchProfile() {
    const { name, accessToken } = useUserStore((state) => state.user || {});
    const setUserProfile = useUserStore((state) => state.setUserProfile);
    const setBookings = useUserStore((state) => state.setBookings);
    const setVenues = useUserStore((state) => state.setVenues);
    const [error, setError] = useState(null);
    const[loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);

            //if name or accessToken is not available, set an error and return
            if (!name || !accessToken) {
                setError(new Error("Username or access token is not available."));
                setLoading(false);
                return;
            }

            const url = `${profileUrl}/${name}?_bookings=true&_venues=true`;

            try {
                const response = await fetch(url, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${accessToken}`,
                    },
                });
                const data = await response.json();

                // Store the profile data in the Zustand store
                setUserProfile(data);
                setBookings(data.bookings);
                setVenues(data.venues);
            } catch (error) {
                setError(data);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [name, accessToken, setUserProfile, setBookings, setVenues]);

    return { loading, error};
}