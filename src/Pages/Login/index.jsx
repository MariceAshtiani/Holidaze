import LoginForm from "../../Components/UI/Form/SigninForm";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Logo from "../../Components/UI/Logo";

export default function LoginPage() {
    return (
        <>
            <HelmetProvider>
                <Helmet>
                    <title>Holidaze | Sign in</title>
                </Helmet>
            </HelmetProvider>
            <main className="registerMain">
            <Logo></Logo>
                <div className="loginForm">
                    <div className="mainContainer">
                        <LoginForm />
                    </div>
                </div>
            </main>
        </>
    );
};