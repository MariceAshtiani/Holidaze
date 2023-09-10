// Login authentication as learned in JS course

import { baseUrl, loginAuth } from "../constants";

const Url = baseUrl;
const endPoint = loginAuth;

export async function userLogin(email, password) {
    console.log(email, password);

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
        return data;
    } catch (error) {
        return error;
    }
};
