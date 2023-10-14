import defaultImage from "../../../../Images/defaultimage.jpg";
import StyledVenues from "./styled";
import VenueCard from "../../Card";
import { isValidImageUrl } from "../../../../Utils/ImageValidation";
import { Link } from "react-router-dom";



export default function RenderVenues({ venues }) {
  return (
    <StyledVenues>
        {venues.length === 0 ? (
          <p>You haven't listed any venues yet.</p>
        ) : (
            venues.map((venue) => {
              let imageUrl = defaultImage;
              if ( venue.media.length > 0 && isValidImageUrl(venue.media[0])) {
                imageUrl = venue.media[0];
              }
              return (
                <VenueCard
                  key={venue.id}
                  id={venue.id}
                  title={venue.name}
                  price={venue.price}
                  img={imageUrl}
                  meta={venue.meta}
                  rating={venue.rating}
                />
              )
            })
        )}
      </StyledVenues>
    )
  };