import { formatDate } from "../../../Utils/DateFormatter";
import StyledCard from "./StyledBookingCard";
import { Link } from "react-router-dom";

export default function VenueBookingsCard({ booking }) {


    return (
            <StyledCard>
                <div className="BookingCardText">
                    <p>Check in: {formatDate(booking.dateFrom)}</p>
                    <p>Check out: {formatDate(booking.dateTo)}</p>
                    <p>Guests: {booking.guests}</p>
                    <p>Booking created: {formatDate(booking.created)}</p>
                </div>

            </StyledCard>
    )
    
}