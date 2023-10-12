import { baseUrl, venues } from "../../Api/constants";


const url = baseUrl + venues;

export async function HandleCreateVenueForm(data, accessToken) {


    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${accessToken}`,
            },
            body: JSON.stringify(data)
        });
        
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(`Error creating venue: ${JSON.stringify(errorData)}`)
        } 

        const responseData = await response.json();
        return responseData;

    } catch (error) {
        console.error("Error creating venue:", error.message);
        throw error;
    }
};