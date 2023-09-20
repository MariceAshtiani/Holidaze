import { useState, useEffect } from "react";
import VenueCard from "../Card";
import StyledVenueList from "./styled";
import defaultImage from "../../../Images/defaultimage.jpg";

export default function VenueList(props) {
    const [venuesWithImages, setVenuesWithImages] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const imagePromises = props.venues.map(async (venue) => {

                let imageUrl = defaultImage;
                if (venue.media) {
                    const isValid = await isValidImageURL(venue.media);
                    if (isValid) {
                        imageUrl = venue.media;
                    }
                }
                
                return {
                    ...venue,
                    imageUrl,
                };
            });

            const venuesWithImages = await Promise.all(imagePromises);
            setVenuesWithImages(venuesWithImages);
        }

        fetchData();
    }, [props.venues]);

    return (
        <StyledVenueList>
            {venuesWithImages.map((venue) => (
                <VenueCard
                key={venue.id}
                id={venue.id}
                title={venue.name}
                price={venue.price}
                img={venue.imageUrl}
                />
        ))}
        </StyledVenueList>
    );
}

// Function to check if a URL returns a valid response
async function isValidImageURL(url) {
    try {
        const response = await fetch(url);
        return response.status === 200;
    } catch (error) {
        return false;
    }
}