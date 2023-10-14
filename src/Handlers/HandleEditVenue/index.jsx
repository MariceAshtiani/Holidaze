import { baseUrl, updateVenue } from "../../Api/constants";

export const HandleUpdateVenue = async (id, data, accessToken) => {
    try {
        const endpoint = `${baseUrl}${updateVenue}${id}`;

        const response = await fetch(endpoint, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${accessToken}`,
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            const errorMessage = await response.text();
            throw new Error(`Error updating venue: ${errorMessage}`);
        }

        const updatedVenue = await response.json();
        return updatedVenue;
    } catch (error) {
        console.error("Error updating venue:", error.message);
        throw error;
    }
};