// Login authentication as learned in JS course

import { baseUrl, loginAuth } from "../constants";

const Url = baseUrl;
const endPoint = loginAuth;

export async function userLogin(credentials) {
    console.log(credentials);

    return fetch(Url + endPoint, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
    }).then((data) => data.json());
};