import CreateVenueForm from "../../Components/UI/Form/CreateVenueForm";
import { Helmet, HelmetProvider } from "react-helmet-async";
import StyledPage from "./styled";

export default function CreateVenuePage() {
    return (
        <>
            <HelmetProvider>
                <Helmet>
                    <title>Holidaze | Create Venue</title>
                </Helmet>
            </HelmetProvider>
            <main>
                <StyledPage>
                <div className="createVenueForm">
                <h1>Create venue</h1>
                        <CreateVenueForm />
                </div>
                </StyledPage>
            </main>
        </>
    );
};