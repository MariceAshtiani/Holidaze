import RegistrationForm from "../../Components/UI/Form/RegisterForm";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Logo from "../../Components/UI/Logo";

export default function RegistrationPage() {
    return (
        <>
            <HelmetProvider>
                <Helmet>
                    <title>Holidaze | Register</title>
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