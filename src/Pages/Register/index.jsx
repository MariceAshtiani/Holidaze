import RegistrationForm from "../../Components/UI/Form/RegisterForm";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Logo from "../../Components/UI/Logo";
//import StyledMain from "./styled";

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
                <div className="registerForm">
                    <div className="mainContainer">
                        <RegistrationForm />
                    </div>
                </div>
            </main>
        </>
    );
};