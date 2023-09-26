import { baseUrl } from "../../constants";
import { headers } from "../headers";
import { profiles } from "../../constants";

export async function getProfile(name) {
    const Url = baseUrl;
    const endPoint = profiles + `/${name}/venues?_bookings=true`;

    return fetch(Url + endPoint, {
        method: "GET",
        headers: headers("application/json"),
    }).then((data) => data.json());
};