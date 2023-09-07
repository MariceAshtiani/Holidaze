// Registration authentication, as learned in JS course

import { baseUrl, regAuth } from "../constants";

const Url = baseUrl;
const endPoint = regAuth;

export async function userRegistration(input) {
    console.log(input);

    try {
        const response = await fetch(Url + endPoint, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(input),
        });

        if (!response.ok) {
            throw new Error("Request failed with status: " + response.status);
        }

        const data = await response.json();
        console.log(data);

        return data;
    } catch (error) {
        throw error;
    }
};