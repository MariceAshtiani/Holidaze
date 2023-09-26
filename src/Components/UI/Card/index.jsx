import StyledCard from "./styled";
import { Link } from "react-router-dom";
import { FaWifi, FaCar, FaUtensils, FaPaw } from "react-icons/fa";

export default function VenueCard(props) {
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
                </div>
            </StyledCard>
        </Link>
    )
    
}