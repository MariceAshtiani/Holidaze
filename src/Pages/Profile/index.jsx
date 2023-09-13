
import { Helmet, HelmetProvider } from "react-helmet-async";

export default function ProfilePage() {
    return (
        <>
            <HelmetProvider>
                <Helmet>
                    <title>Holidaze | Profile</title>
                </Helmet>
            </HelmetProvider>
            <main>
            <h1>Profile Hello</h1>
            </main>
        </>
    );
};