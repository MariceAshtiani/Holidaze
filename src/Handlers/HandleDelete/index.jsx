import { baseUrl, updateVenue } from "../../Api/constants";

export const HandleDeleteVenue = async (id, accessToken) => {
    try {
        const endpoint = `${baseUrl}${updateVenue}${id}`;

        const response = await fetch(endpoint, {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });

        if (!response.ok) {
            const errorMessage = await response.text();
            throw new Error(`Error deleting venue: ${errorMessage}`);
        }

        return true;
    } catch (error) {
        console.error("Error deleting venue:", error.message);
        throw error;
    }
};