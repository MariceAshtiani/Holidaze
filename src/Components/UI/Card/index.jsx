import StyledCard from "./styled";
import { Link } from "react-router-dom";

export default function VenueCard(props) {
    return (
        <Link to="">
            <StyledCard>
                <img src={props.img} alt={props.title} />
                <div className="venueCardText">
                    <h3>{props.title}</h3>
                    <p>{props.price}</p>
                </div>
            </StyledCard>
        </Link>
    )
    
}