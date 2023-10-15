import StyledCard from "./styled";
import { Link } from "react-router-dom";
import { FaWifi, FaCar, FaUtensils, FaPaw, FaStar } from "react-icons/fa";
import Rating from "../Venues/Rating";
import { EditBtn } from "../Buttons/styled";

export default function VenueCard({ id, title, price, img, meta, rating, ownerEmail, currentUserEmail }) {
    const hasRatings = rating > 0;
    const { wifi, parking, breakfast, pets } = meta || {};
    const hasAmenities = wifi || parking || breakfast || pets;
    const isUserVenue = ownerEmail === currentUserEmail;


    return (
        <Link to={`/listing/${id}`}>
            <StyledCard>
                <img src={img} alt={title} />
                <div className="venueCardText">
                    <h3>{title}</h3>
                    <p>{price},-</p>
                    <div className="meta">
                        {hasAmenities ? (
                            <>
                                {wifi && <p><FaWifi /></p>}
                                {parking && <p><FaCar /></p>}
                                {breakfast && <p><FaUtensils /></p>}
                                {pets && <p><FaPaw /></p>}
                            </>
                        ) : (
                            <p>No venue amenities</p>
                        )}
                    </div>
                    <div className="card-bottom">
                        <div className="rating">
                            <Rating rating={rating} hasRatings={hasRatings} />
                        </div>
                        {isUserVenue && (
                            <Link to={`/editvenue/${id}`}>
                                <EditBtn className="edit-btn">Edit</EditBtn>
                            </Link>
                        )}
                    </div>
                </div>
            </StyledCard>
        </Link>
    )
    
}