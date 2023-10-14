import StyledBookings from "./styled";
import BookingCard from "../../Card/bookingCard";

export default function RenderBookings({ bookings }) {
    return (
        <StyledBookings>
            <div className="bookings">
                {bookings.length === 0 ? (
                    <p>You haven't booked any venues yet.</p>
                ) : (
                    <div className="booking-list">
                        {bookings.map((booking) => (
                            <BookingCard key={booking.id} booking={booking} />
                        ))}
                    </div>
                )}
            </div>
        </StyledBookings>
    );
  }