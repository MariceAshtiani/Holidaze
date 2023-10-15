
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import BasicButton from "../../Buttons/styled";
import { userRegistration } from "../../../../Api/Auth/register";
import StyledForm from "./styled";
import { RegistrationSuccessModal, ErrorModal } from "../../../../Styles/ModalStyles";
import { useState } from "react";
import ReactModal from "react-modal";

//Validation schema using Yup

const schema = yup.object({
    name: yup.string()
        .required("Please enter your name")
        .matches(
            /^[a-zA-Z0-9_]+$/,
            "Name can only contain alphanumeric characters and underscores"
        ),
    email: yup.string()
        .email("Invalid email format")
        .required("Email is required")
        .matches(
            /[\w\-.]+@(stud.)?noroff.no$/,
        "Email must be a stud.noroff.no or noroff email"
        ),
    password: yup.string()
        .min(8, "Password must be at least 8 characters")
        .required("Password is required"),
    avatar: yup.string()
        .url("Please enter a valid URL"),
    venueManager: yup.boolean()
        });

export default function RegistrationForm() {
    const [showSuccessModal, setShowSuccessModal] = useState(false)
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);

    ReactModal.setAppElement("#root");

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });
    

    const onSubmit = async (data) => {
        //Send to the API
        try {
            const { name, email, password, avatar, venueManager } = data;
            const response = await userRegistration(name, email, password, avatar, venueManager);

            console.log(response);

            setShowSuccessModal(true);
            setSuccessMessage("Registration Successful!")

        } catch (error) {
            console.error( error);
            setErrorMessage(error.message);
            setIsErrorModalOpen(true);
        }
    };

    const closeSuccessModal = () => {
        setShowSuccessModal(false);
    };

    const closeErrorModal = () => {
        setIsErrorModalOpen(false);
    }

    return (
        <div>
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
            <h1>Register</h1>

            <div className="input-group">
            <div>
                <label>Name:</label>
                <input {...register("name")} />
                <p className="registerFormError">{errors.name?.message}</p>
            </div>

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

            <div>
                <label>Avatar:</label>
                <input {...register("avatar")} />
                <p className="registerFormError">{errors.avatar?.message}</p>
            </div>
            </div>

            <div className="venueManagerOption">
                <label>I am a venue manager:</label>
                <input type="checkbox" className="venueManagerCheckbox" {...register("venueManager")} />

            </div>
            <BasicButton type="submit">Register</BasicButton>

            <div className="goToSignin">
                <p>Do you already have an account?</p>
                <a href="/login">Sign in here</a>
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
                    <span>Maybe you are already registered?</span>
                    <a href="/Login">Sign in instead</a>
                </div>
                <div>
                    <button onClick={closeErrorModal}>Close</button>
                </div>
            </div>
        </ErrorModal>

        <RegistrationSuccessModal
        isOpen={showSuccessModal}
        onRequestClose={closeSuccessModal}
        contentLabel="Success Modal"
        >
            <div className="modal-content">
                <h1>Success!</h1>
                <p>{successMessage}</p>
                <a href="/Login">Sign in here!</a>
                <div>
                <button onClick={closeSuccessModal}>Close</button>
                </div>
            </div>
        </RegistrationSuccessModal>
        </div>
    );
}