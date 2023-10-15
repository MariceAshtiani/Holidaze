import LoginForm from "../../Components/UI/Form/SigninForm";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Logo from "../../Components/UI/Logo";

export default function LoginPage() {
    return (
        <>
            <HelmetProvider>
                <Helmet>
                    <title>Holidaze | Sign in</title>
                    <meta
                        name="description"
                        content="Sign in to star browsing and book venues for your next event"></meta>
                        <link rel="stylesheet" href="https://use.typekit.net/qjo5cgi.css"></link>
                </Helmet>
            </HelmetProvider>
            <main className="registerMain">
            <Logo></Logo>
                <div className="mainContainer">
                    <div className="loginForm">
                        <LoginForm />
                    </div>
                </div>
            </main>
        </>
    );
};