import VenueBookingsCard from "../../Card/venueBookingsCard";

export default function FetchVenueBookings({ bookings }) {

    return (
        <div>
            {bookings.map(booking => (
                <VenueBookingsCard key={booking.id} booking={booking} />
            ))}
        </div>
    );
}