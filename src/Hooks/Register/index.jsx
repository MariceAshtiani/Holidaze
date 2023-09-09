import React from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import BasicButton from "../../Components/UI/Buttons/styled";
import { userRegistration } from "../../Api/Auth/register";
import { useNavigate } from "react-router-dom";

//Validation schema using Yup

const schema = yup.object().shape({
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
            /^[\w-\.]+@stud\.noroff\.no$/,
        "Email must be a stud.noroff.no email"
        ),
    password: yup.string()
        .min(8, "Password must be at least 8 characters")
        .required("Password is required"),
    avatar: yup.string()
        .url("Please enter a valid URL"),
    venueManager: yup.boolean()
});

export default function RegistrationHook() {
    const { register, handleSubmit, control, errors } = useForm({
        resolver: yupResolver(schema)
    });
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        //Send to the API
        try {
            const response = await userRegistration(
                data.name,
                data.email,
                data.password,
                data.avatar,
                data.venueManager
            );

            console.log(response);

            if (response === ok) {
                navigate("/Login")
            }
        } catch (error) {
            console.error("An error occured calling the API", error);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>Name:</label>
                <input name="name" ref={register} />
                {errors.name && <p>{errors.name.message}</p>}
            </div>

            <div>
                <label>Email:</label>
                <input name="email" ref={register} />
                {errors.email && <p>{errors.email.message}</p>}
            </div>

            <div>
                <label>Password:</label>
                <input type="password" name="password" reg={register} />
                {errors.password && <p>{errors.password.message}</p>}
            </div>

            <div>
                <label>Avatar:</label>
                <input type="url" name="avatar" reg={register} />
                {errors.avatar && <p>{errors.password.message}</p>}
            </div>

            <div>
                <label>Venue Manager:</label>
                <Controller
                    name="venueManager"
                    control={control}
                    render={({ onChange, value }) => (
                        <input
                        type="checkbox"
                        checked={value}
                        onChange={(e) => onChange(e.target.checked)}
                        />
                    )}
                />
            </div>

            <BasicButton type="submit">Register</BasicButton>
        </form>
    );
}