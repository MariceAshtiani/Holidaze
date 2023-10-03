import StyledConfirmation from "./styled";
import BasicButton, { AdvancedBtn } from "../../Components/UI/Buttons/styled";
import { Link } from "react-router-dom";

export default function BookingConfirmedPage() {

    return (
        <StyledConfirmation>
            <div className="confirmationContainer">
                <h1>Your booking is confirmed!</h1>
                <h2>Thank you for your reservation.</h2>
                <p>Your booking confirmation will arrive in your email shortly. There you will find all information about your booking, the venue and information about payment. If you have any questions please contact the venue, contact-information will also be provided in you email.</p>
                <Link to="/">
                    <BasicButton>HOME</BasicButton>
                </Link>
            </div>
        </StyledConfirmation>
    )
}