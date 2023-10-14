import UpdateVenueForm from "../../Components/UI/Form/UpdateVenueForm";
import { Helmet, HelmetProvider } from "react-helmet-async";
import ApiHook from "../../Hooks/apiFetch";
import { useParams } from "react-router-dom";
import { updateVenue } from "../../Api/constants";
import StyledPage from "./styled";
import Loader from "../../Components/UI/Loader";

export default function UpdateVenuePage() {
    let { id } = useParams();
    const url = updateVenue;
    const { data: venueData, isLoading, isError } = ApiHook(url + `${id}`);

    console.log(venueData);

    if (isLoading) {
        return <Loader />
    }

    if (isError) {
        return <div>Error fetching venue data.</div>;
    }

    return (
        <>
            <HelmetProvider>
                <Helmet>
                    <title>Holidaze | Edit Venue</title>
                    <meta
                        name="description"
                        content="Update your venue"></meta>
                </Helmet>
            </HelmetProvider>
            <main>
                <StyledPage>
                    <div className="updateVenueForm">
                        <h1>Update venue</h1>
                        <UpdateVenueForm venueData={venueData} />
                    </div>
                </StyledPage>
            </main>
        </>
    );
};