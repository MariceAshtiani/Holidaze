import { useState, useEffect } from "react";
import VenueCard from "../Card";
import StyledVenueList from "./styled";
import defaultImage from "../../../Images/defaultimage.jpg";
import Loader from "../Loader";
import { isValidImageUrl } from "../../../Utils/ImageValidation/index";
import { useUserStore } from "../../../Hooks/userStore";
import { AdvancedBtn } from "../Buttons/styled";
import { Link } from "react-router-dom";


export default function VenueList({ venues }) {
    const [venuesWithImages, setVenuesWithImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const user = useUserStore((state) => state.user);
    const currentUserEmail = useUserStore((state) => state.user?.email);

    useEffect(() => {
        const delayTimeout = setTimeout(async () => {
            const imagePromises = venues.map(async (venue) => {
                let imageUrl = defaultImage;
                    if (venue.media.length > 0) {
                        const isValid = await isValidImageUrl(venue.media[0]);
                     if (isValid) {
                        imageUrl = venue.media[0];
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
                    }, 3000);
                    return () => {
                        clearTimeout(delayTimeout);
                    };
                }, [venues]);

                const isVenueManager = user?.venueManager;

    return (
        <>
            
            <StyledVenueList>
            {isVenueManager && (
                <div className="createBtn">
                    <Link to="/createvenue">
                        <AdvancedBtn>Create venue</AdvancedBtn>
                    </Link>
                </div>
                )
            }
                
                {isLoading ? (
                    <div className="loader">
                        <Loader loadingState={isLoading} />
                    </div>
                ) : (
                    venuesWithImages.map((venue) => (
                    <VenueCard
                    key={venue.id}
                    id={venue.id}
                    title={venue.name}
                    price={venue.price}
                    img={venue.imageUrl}
                    meta={venue.meta}
                    rating={venue.rating} 
                    ownerEmail={venue.owner.email}
                    currentUserEmail={currentUserEmail}
                    />
                ))
                
            )}
            </StyledVenueList>
        </>
    );
}
