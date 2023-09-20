// Login authentication as learned in JS course

import { baseUrl, loginAuth } from "../constants";

const Url = baseUrl;
const endPoint = loginAuth;

export async function userLogin(email, password) {

    try {
        

        const response = await fetch(Url + endPoint, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: email,
                password: password,
            }),
        });

        const data = await response.json();

        if (response.ok) {
            return data;
        }
        
    } catch(error) {

        throw new Error(data?.errors[0]?.message ?? "An error occurred trying to log in");
    }
};