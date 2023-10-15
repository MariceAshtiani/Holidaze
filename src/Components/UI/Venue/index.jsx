import Rating from "../Venues/Rating";
import { FaWifi, FaCar, FaUtensils, FaPaw } from "react-icons/fa";
import StyledInfo from "./styled";

export default function VenueInfo ({ data }) {
    const hasRatings = data.rating > 0;

    return (
        <StyledInfo>
            <div className="venueInfo">
                <h1>{data.name}</h1>

                <div className="rating">
                    <Rating rating={hasRatings ? data.rating : 0} hasRatings={hasRatings} />
                </div>

                <h2>Price: {data.price}</h2>
                <h3>Location:</h3>
                <p>
                    {
                        (!data.location || (!data.location.address && !data.location.city && !data.location.country))
                        ? "No location provided"
                        : `${data.location?.address || ''}, ${data.location?.city || ''}, ${data.location?.country || ''}`
                    }
                </p>
                <h3>Description:</h3>
                <p>{data.description}</p>
                <h3>Max Guests:</h3>
                <p>{data.maxGuests}</p>
                <div className="utilities">
                    <h3>Venue Amenities and Policies:</h3>
                    <div className="meta">
                    <p> <FaWifi /> {data.meta?.wifi ? 'Available' : 'Not available'}</p>
                    <p> <FaCar /> {data.meta?.parking ? 'Available' : 'Not available'}</p>
                    <p> <FaUtensils /> {data.meta?.breakfast ? 'Included' : 'Not included'}</p>
                    <p> <FaPaw /> {data.meta?.pets ? 'Allowed' : 'Not Allowed'}</p>
                    </div>
                </div>
            </div>
        </StyledInfo>
    );
};