import { useState, useEffect } from "react";
import { baseUrl } from "../Api/constants";
import { headers } from "../Api/Auth/headers";


/**
 * Function to call the API to get data
 * @Creator Martin Kruger
 * @param endpoint needs a url for the endpoing of the api call you want to make
 * @param method needs the method you want to use on the fetch call
 * @param body needs a body for making fetch calls
 * @Return Returning data, loading and error.
 */

const ApiHook = (endpoint, method, body) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const url = baseUrl;

    useEffect(() => {
        async function getData() {
            try {
                setIsLoading(true);
                setIsError(false);
                const fetchedData = await fetch(url + endpoint, {
                    method: method,
                    headers: headers("application/json"),
                    body: JSON.stringify(body),
                });

                const json = await fetchedData.json();

                setData(json);
            } catch (error) {
                console.log(error);
                setIsError(true);
            } finally {
                setIsLoading(false);
            }
        }
        getData();
    }, [endpoint, method, body]);
    return { data, isLoading, isError };
};

export default ApiHook;