import StyledBookings from "./styled";

export default function RenderBookings({ bookings }) {
    return (
      <StyledBookings>
        <div className="bookings">
          {bookings.length === 0 ? (
            <p>You haven't booked any venues yet.</p>
          ) : (
            <ul>
              {bookings.map((booking) => (
                <li key={booking.id}>
                  <h3>Booking ID: {booking.id}</h3>
                  <p>Check-in Date: {booking.dateFrom}</p>
                  <p>Check-out Date: {booking.dateTo}</p>
                  <p>Guests: {booking.guests}</p>
                  <p>Created: {booking.created}</p>
                  <p>Updated: {booking.updated}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </StyledBookings>
    );
  }