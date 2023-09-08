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
                <div className="registerForm">
                    <Logo></Logo>
                    <div className="mainContainer">
                        <RegistrationForm />
                    </div>
                </div>
            </main>
        </>
    );
};