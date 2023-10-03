import StyledCard from "./styled";
import { Link } from "react-router-dom";
import { FaWifi, FaCar, FaUtensils, FaPaw, FaStar } from "react-icons/fa";
import Rating from "../Venues/Rating";

export default function VenueCard(props) {
    const hasRatings = props.rating > 0;


    return (
        <Link to={`/listing/${props.id}`}>
            <StyledCard>
                <img src={props.img} alt={props.title} />
                <div className="venueCardText">
                    <h3>{props.title}</h3>
                    <p>{props.price},-</p>
                    <div className="meta">
                        <p>{props.meta?.wifi ? <FaWifi /> : "" }</p>
                        <p>{props.meta?.parking ? <FaCar /> : ""}</p>
                        <p>{props.meta?.breakfast ? <FaUtensils /> : ""}</p>
                        <p>{props.meta?.pets ? <FaPaw /> : ""}</p>
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