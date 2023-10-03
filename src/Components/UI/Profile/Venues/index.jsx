import { FaWifi, FaCar, FaUtensils, FaPaw } from "react-icons/fa";
import StyledVenues from "./styled";

async function isValidImageUrl(url) {
    try {
        const response = await fetch(url, {
            method: "HEAD",
        });
        return response.status === 200;
    } catch (error) {
        return false;
    }
}

export default function RenderVenues({ venues }) {
  return (
    <StyledVenues>
      <div className="venues">
        {venues.length === 0 ? (
          <p>You haven't listed any venues yet.</p>
        ) : (
          <div className="venue-list">
            {venues.map((venue) => (
              <div key={venue.id} className="venue">
                <h3>Venue Name: {venue.name}</h3>
                <p>Price: {venue.price}</p>
                <p>Max Guests: {venue.maxGuests}</p>
                {/* Render other venue details here */}
                <div className="venue-media">
                  <h4>Media:</h4>
                  {venue.media.map((mediaUrl, index) => (
                    <img
                      key={index}
                      src={isValidImageUrl(mediaUrl) ? mediaUrl : "/src/Images/defaultimage.jpg"}
                      alt={`Media ${index}`}
                      className="venue-media-image"
                    />
                  ))}
                </div>
                <div className="venue-meta">
                  <h4>Meta:</h4>
                  {venue.meta.wifi && <p><FaWifi /> Wi-Fi</p>}
                  {venue.meta.parking && <p><FaCar /> Parking</p>}
                  {venue.meta.breakfast && <p><FaUtensils /> Breakfast</p>}
                  {venue.meta.pets && <p><FaPaw /> Pets Allowed</p>}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </StyledVenues>
  );
}