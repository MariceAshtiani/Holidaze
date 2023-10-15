import RegistrationForm from "../../Components/UI/Form/RegisterForm";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Logo from "../../Components/UI/Logo";
import StyledPage from "./styled";

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
                <StyledPage>
                     <Logo></Logo>
                        <div className="registerForm">
                            <RegistrationForm />
                        </div>
                </StyledPage>
            </main>
        </>
    );
};