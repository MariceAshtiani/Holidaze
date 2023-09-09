import { useState, useEffect } from "react";
import RegistrationHook from "../../../../Hooks/Register";
import { useNavigate } from "react-router-dom";

export default function RegistrationForm() {
const navigate = useNavigate();
    //check if user is logged in
    useEffect(() => {
        const accessToken = localStorage.getItem("token");
        if (accessToken != null) {
            return navigate("/");
        }
    }, []);

    return (
        <div>
            <RegistrationHook />
        </div>
    );
}