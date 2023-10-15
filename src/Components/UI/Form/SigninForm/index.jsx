import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import BasicButton from "../../Buttons/styled";
import { userLogin } from "../../../../Api/Auth/login";
import StyledForm from "../RegisterForm/styled";
import ReactModal from "react-modal";
import { ErrorModal } from "../../../../Styles/ModalStyles";
import { useUserStore } from "../../../../Hooks/userStore";
import { useNavigate } from "react-router-dom";

//Validation schema using Yup

const schema = yup.object({
    email: yup.string()
        .email("Invalid email format")
        .required("Email is required")
        .matches(
            /[\w\-.]+@(stud.)?noroff.no$/,
        "Email must be a stud.noroff.no or noroff email"
        ),
    password: yup.string()
        .min(8, "Password must be at least 8 characters")
        .required("Password is required")
        });

export default function LoginForm() {

    const [errorMessage, setErrorMessage] = useState("");
    const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);
    const navigate = useNavigate();

    ReactModal.setAppElement("#root");

    const { register, handleSubmit, formState: { errors }, } = useForm({
        resolver: yupResolver(schema)
    });
    
    

    const onSubmit = async (data) => {
        //Send to the API
        try {
            const user = await userLogin(
                data.email,
                data.password,
            );
            console.log(user);
            const isVenueManager = user.isVenueManager;
            const accessToken = user.accessToken;
        


            // Save user details in Zustand store
            useUserStore.setState({ user, isLoggedIn: true, isVenueManager, accessToken });

            //redirect if login is ok
            navigate("/profile");

        } catch (error) {
            console.error( error);
            setErrorMessage(error.message);
            setIsErrorModalOpen(true);
        }
    };

    const closeErrorModal = () => {
        setIsErrorModalOpen(false);
    }



    return (
        <div>
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
            <h1>Sign in</h1>

            <div className="input-group">

            <div>
                <label>Email:</label>
                <input {...register("email")} />
                <p className="registerFormError">{errors.email?.message}</p>
            </div>

            <div>
                <label>Password:</label>
                <input {...register("password")} type="password" />
                <p className="registerFormError">{errors.password?.message}</p>
            </div>
            </div>

            <BasicButton type="submit">Sign in</BasicButton>

            <div className="goToSignin">
                <p>Are you not registered?</p>
                <a href="/register">Register here</a>
            </div>
        </StyledForm>

        <ErrorModal
        isOpen={isErrorModalOpen}
        onClose={closeErrorModal}
        errorMessage={errorMessage}
        >
            <div className="errorModal-content">
                <h1>Error</h1>
                <p>{errorMessage}</p>
                <div className="already-registered">
                    <span>Are you not registered?</span>
                    <a href="/Register">Register here</a>
                </div>
                <div>
                    <button onClick={closeErrorModal}>Close</button>
                </div>
            </div>
        </ErrorModal>

        </div>
    );
}