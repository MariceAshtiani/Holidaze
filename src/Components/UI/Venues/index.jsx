import { useState, useEffect } from "react";
import VenueCard from "../Card";
import StyledVenueList from "./styled";
import defaultImage from "../../../Images/defaultimage.jpg";
import Loader from "../Loader";

export default function VenueList(props) {
    const [venuesWithImages, setVenuesWithImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            const imagePromises = props.venues.map(async (venue) => {

                let imageUrl = defaultImage;
                if (venue.media.length > 0) {
                    const isValid = await isValidImageURL(venue.media[0]);
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
            setIsLoading(false);
        }

        fetchData();
    }, [props.venues]);

    return (
        <StyledVenueList>
            {isLoading ? (
                <Loader loadingState={isLoading} />
            ) : (
                venuesWithImages.map((venue) => (
                <VenueCard
                key={venue.id}
                id={venue.id}
                title={venue.name}
                price={venue.price}
                img={venue.imageUrl}
                meta={venue.meta}
                />
            ))
            
        )}
        </StyledVenueList>
    );
}

// Function to check if a URL returns a valid response
async function isValidImageURL(url) {
    try {
        const response = await fetch(url, {
            method: "HEAD",
        });
        return response.status === 200;
    } catch (error) {
        return false;
    }
}