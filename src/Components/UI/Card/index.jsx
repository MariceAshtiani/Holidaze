import StyledCard from "./styled";
import { Link } from "react-router-dom";
import { FaWifi, FaCar, FaUtensils, FaPaw, FaStar } from "react-icons/fa";
import Rating from "../Venues/Rating";

export default function VenueCard(props) {
    const hasRatings = props.rating > 0;
    const { wifi, parking, breakfast, pets } = props.meta || {};
    const hasAmenities = wifi || parking || breakfast || pets;


    return (
        <Link to={`/listing/${props.id}`}>
            <StyledCard>
                <img src={props.img} alt={props.title} />
                <div className="venueCardText">
                    <h3>{props.title}</h3>
                    <p>{props.price},-</p>
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
                    <div className="rating">
                        <Rating rating={props.rating} hasRatings={hasRatings} />
                        <span className="rating-count">
                            {hasRatings ? `(${props.rating})` : "(0)"}
                        </span>
                    </div>
                </div>
            </StyledCard>
        </Link>
    )
    
}