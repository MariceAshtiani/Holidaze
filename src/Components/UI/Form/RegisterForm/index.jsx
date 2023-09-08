import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { userRegistration } from "../../../../Api/Auth/register";
import StyledForm from "./styled";

export default function RegistrationForm() {
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [avatar, setAvatar] = useState("");
    const [isVenueManager, setIsVenueManager] = useState(false);
    const [registrationStatus, setRegistrationStatus] = useState(null);
    const [errors, setErrors] = useState([]);

    // check if user is logged in
    useEffect(() => {
        const accessToken = localStorage.getItem("token");
        if (accessToken != null) {
            return navigate("/");
        }
    }, []);



    const handleRegistration = async (event) => {
        try {
            event.preventDefault();

            const registrationResult = await userRegistration(
                name,
                email,
                password,
                avatar,
                isVenueManager
            );

            if (registrationResult.errors != null) {
                setErrors(registrationResult.errors);
            } else {
                navigate("/login");
            }
        } catch (error) {
            console.error("Registration failed:", error);
            //Handle registration error (e.g., show an error message to the user )
            setRegistrationStatus("Registration failed. Please try again")
        }
    };

    return (
        <div>
            <StyledForm onSubmit={handleRegistration}>
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        pattern="[\w\-.]+@(stud.)?noroff.no$"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        minLength={8}
                    />
                </div>
                <div>
                    <label>Avatar:</label>
                    <input
                        type="text"
                        value={avatar}
                        onChange={(e) => setAvatar(e.target.value)}
                    />
                </div>
                <div>
                    <label>
                        Are you a venue manager?
                        <input
                            type="checkbox"
                            checked={isVenueManager}
                            onChange={(e) => setIsVenueManager(e.target.checked)}
                        />
                    </label>
                </div>
                <div>
                    <button type="button" onClick={handleRegistration}>
                        Register
                    </button>
                </div>
                {registrationStatus && <p>{registrationStatus}</p>}
                <div>
                    <span>Already have an account?</span>
                    <a href="/login">Sing in here!</a>
                </div>
            </StyledForm>
        </div>
    );
}