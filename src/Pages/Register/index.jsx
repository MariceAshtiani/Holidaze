import RegistrationForm from "../../Components/UI/Form/RegisterForm";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Logo from "../../Components/UI/Logo";

export default function RegistrationPage() {
    return (
        <>
            <HelmetProvider>
                <Helmet>
                    <title>Holidaze | Register</title>
                    <meta
                    name="description"
                    content="Register to holidaze and start browsing for venues today"></meta>
                    <link rel="stylesheet" href="https://use.typekit.net/qjo5cgi.css"></link>
                </Helmet>
            </HelmetProvider>
            <main className="registerMain">
            <Logo></Logo>
                <div className="mainContainer">
                    <div className="registerForm">
                        <RegistrationForm />
                    </div>
                </div>
            </main>
        </>
    );
};