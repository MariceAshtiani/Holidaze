import { useEffect } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

import ApiHook from "../../Hooks/apiFetch";
import { venues } from "../../Api/constants";
import { useQueryStore } from "../../Hooks/queryStore";

import Loader from "../../Components/UI/Loader";
import VenueList from "../../Components/UI/Venues";
import Search from "../../Components/UI/Search";
import StyledHeadline from "./styled";
import Hero from "../../Components/UI/Hero";


export default function Home() {
    const apiUrl = venues;
    const { data, isLoading, isError } = ApiHook(apiUrl);
    const { query, setQuery } = useQueryStore();

    useEffect(() => {
        setQuery(data);
    }, [data]);

    if (isLoading) {
        return <Loader />
    }
    if (isError) {
        return <h2>Error loading data</h2>
    }

    return (
        <div>
            <HelmetProvider>
                <Helmet>
                    <title>Holidaze | Home</title>
                    <meta
                        name="description"
                        content="Holidaze is the perfect site for finding accomodation for your holiday"></meta>
                    <link rel="stylesheet" href="https://use.typekit.net/qjo5cgi.css"></link>
                </Helmet>
            </HelmetProvider>
            <section>
                <Hero />
            </section>
            <main>
                <StyledHeadline>Browse Venues</StyledHeadline>
                <Search data={data} />
                <section>{<VenueList venues={query} />}</section>
            </main>
        </div>
    )
}