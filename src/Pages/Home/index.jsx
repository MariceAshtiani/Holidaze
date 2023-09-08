import ApiHook from "../../Hooks/apiFetch";
import Loader from "../../Components/UI/Loader";

import Hero from "../../Components/UI/Hero";
import { Helmet, HelmetProvider } from "react-helmet-async";

export default function Home() {
    const { data, isLoading, isError } = ApiHook();

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
                </Helmet>
            </HelmetProvider>
            <section>
                <Hero />
            </section>
        </div>
    )
}