// Registration authentication, as learned in JS course

import { baseUrl, regAuth } from "../constants";

const Url = baseUrl;
const endPoint = regAuth;

export async function userRegistration(name, email, password, avatar, isVenueManager) {
    console.log(name, email, password, avatar, isVenueManager);

    try {
        const registrationData = {
            name: name,
            email: email,
            password: password,
            avatar: avatar || null,
            venueManager: isVenueManager || false,
        };


        const response = await fetch(Url + endPoint, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(registrationData),
        });

        if (!response.ok) {
            throw new Error("Request failed with status: " + response.status + " " + response.statusText);
        }

        const data = await response.json();
        console.log(data);

        return data;
    } catch (error) {
        throw error;
    }
};