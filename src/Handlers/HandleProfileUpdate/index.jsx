import { useUserStore } from "../../Hooks/userStore";
import { profileUrl } from "../../Api/constants";

export const HandleUpdateProfile = async (name, formData) => {
    const accessToken = useUserStore((state) => state.user.accessToken);
    try {
        const endpoint = `${profileUrl}/${name}`;

        //Send a PUT request to the API with the updated data
        const response = await fetch(endpoint, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${accessToken}`,
            },
            body: JSON.stringify(formData),
        });

        //Check if the request was successful
        if (!response.ok) {
            const errorMessage = await response.text();
            throw new Error(`Error updating profile: ${errorMessage}`);
        }

        const updatedProfile = await response.json();
        return updatedProfile;
    } catch (error) {
        console.error("Error updating profile:", error);
        throw error;
    }
};