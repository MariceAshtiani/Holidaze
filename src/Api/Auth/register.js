// Registration authentication, as learned in JS course

import { baseUrl, regAuth } from "../constants";

const Url = baseUrl;
const endPoint = regAuth;

export async function userRegistration(name, email, password, avatar, isVenueManager) {
    console.log(name, email, password, avatar, isVenueManager);

    try{

        const registrationData = {
            name: name,
            email: email,
            password: password,
            avatar: avatar || null,
            venueManager: isVenueManager,
        };


        const response = await fetch(Url + endPoint, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(registrationData),
        });

        const data = await response.json();

        if (response.ok) {
        return data;
        } else {
            throw new Error(data?.errors[0]?.message ?? "An error occurred during registration");

        }
    } catch(error) {
        throw new Error("An error occurred during registration");
    }
};