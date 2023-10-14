
import { profileUrl } from "../../Api/constants";

export const HandleUpdateProfile = async (name, formData, accessToken) => {
    try {
        const endpoint = `${profileUrl}/${name}/media`;

        //Send a PUT request to the API with the updated data
        const response = await fetch(endpoint, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${accessToken}`,
            },
            body: JSON.stringify({ avatar: formData.avatar }),
        });

        //Check if the request was successful
        if (!response.ok) {
            const errorMessage = await response.text();
            throw new Error(`Error updating profile: ${errorMessage}`);
        }

        const updatedProfile = await response.json();
        return updatedProfile;
    } catch (error) {
        console.error("Error updating profile:", error.message);
        throw error;
    }
};