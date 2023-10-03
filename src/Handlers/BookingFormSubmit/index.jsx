import { toast } from "react-toastify";
import { baseUrl, bookings } from "../../Api/constants";
import { useUserStore } from "../../Hooks/userStore";

const url = baseUrl + bookings;
const method = "POST"

export async function HandleBookingForm(formData, resetForm) {
    const { accessToken } = useUserStore();

    try {
        const response = await fetch(url, {
            method,
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${accessToken}`,
            },
            body: JSON.stringify(formData)
        })
        
        if (!response.ok) {
            throw new Error(`Something went wrong: ${response.status}`)
        } 

        resetForm();
        toast("Venue booked", {
            position: "center",
            type: "success",
        }); 
    } catch (error) {
        toast(`An error occured: ${error}`, {
            position: center,
            type: "error",
        });
    }
};