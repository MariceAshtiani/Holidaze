import { formatDate } from "../../../Utils/DateFormatter";
import StyledCard from "./StyledBookingCard";
import { Link } from "react-router-dom";

export default function BookingCard({ booking }) {


    return (
            <StyledCard>
                <div className="BookingCardText">
                    <h4>Check in:</h4> 
                    <p>{formatDate(booking.dateFrom)}</p>
                    <h4>Check out:</h4>
                    <p>{formatDate(booking.dateTo)}</p>
                    <h4>Guests: </h4>
                    <p>{booking.guests}</p>
                    <h4>Booking created: </h4>
                    <p>{formatDate(booking.created)}</p>
                </div>
            </StyledCard>
    )
    
}