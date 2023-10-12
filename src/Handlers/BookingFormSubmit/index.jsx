import { baseUrl, bookings } from "../../Api/constants";


const url = baseUrl + bookings;

export async function HandleBookingForm(data, accessToken) {

    if (!(data.dateFrom instanceof Date)) {
        throw new Error("dateFrom is not a date object");
    }

    if (!(data.dateTo instanceof Date)) {
        throw new Error("dateTo is not a date object");
    }

    const dateFromString = data.dateFrom.toISOString();
    const dateToString = data.dateTo.toISOString();
    
    const payload = {
        dateFrom: dateFromString,
        dateTo: dateToString,
        guests: data.guests,
        venueId: data.venueId
    };

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${accessToken}`,
            },
            body: JSON.stringify(payload)
        });
        
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(`Error creating booking: ${JSON.stringify(errorData)}`)
        } 

        const responseData = await response.json();
        return responseData;

    } catch (error) {
        console.error("Error creating booking:", error.message);
        throw error;
    }
};