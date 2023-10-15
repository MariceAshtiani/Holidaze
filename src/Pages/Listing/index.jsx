import { useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useParams } from "react-router-dom";
import ReactModal from "react-modal";
import { Link } from "react-router-dom";

import ApiHook from "../../Hooks/apiFetch";
import { listings } from "../../Api/constants";
import Loader from "../../Components/UI/Loader";
import {SmallBtn, EditBtn} from "../../Components/UI/Buttons/styled";
import { imageModalStyle } from "../../Styles/ModalStyles";
import StyledVenue from "./styled";
import VenueInfo from "../../Components/UI/Venue";
import BookingCalendar from "../../Components/UI/Calendar";
import { useUserStore } from "../../Hooks/userStore";
import FetchVenueBookings from "../../Components/UI/Venue/VenueBookings";
ReactModal.setAppElement("#root");


export default function VenuePage() {
    let { id } = useParams();
    const url = `${listings}/${id}?_bookings=true`;
    const { data, isLoading, isError } = ApiHook(url);
    const [isImageModalOpen, setIsImageModalOpen] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(true);
    const defaultImage = "/src/Images/defaultimage.jpg";
    const { user, isVenueManager, venues } = useUserStore(state => ({
        user: state.user,
        isVenueManager: state.isVenueManager,
        venues: state.venues
    }));

    console.log(venues);
    const handleImageError = (event) => {
        event.target.src = defaultImage;
    }

    const isUserOwner = isVenueManager && venues?.some(venue => venue.id === id);

    console.log(data);

    if (isLoading || !data) {
        return <Loader />;
    }
    if (isError) {
        return <div>Error displaying Venue</div>;
    }

    const handleCloseModal = () => {
        setIsImageModalOpen(false);
    }

    const closeModal = () => {
        setIsModalOpen(false);
    }

    return (
        <>
        <HelmetProvider>
            <Helmet>
                <title>Holidaze | Venue</title>
                <meta
                    name="description"
                    content="View details of the venue and what it has to offer and make a booking">
                </meta>
                <link rel="stylesheet" href="https://use.typekit.net/qjo5cgi.css"></link>
            </Helmet>
        </HelmetProvider>
            <main>
                <StyledVenue>
                
                <ReactModal isOpen={isImageModalOpen} style={imageModalStyle}>
                    <div className="modalImage">
                        <img src={data.media} alt={data.name}></img>
                    </div>
                    <SmallBtn onClick={handleCloseModal}>Close</SmallBtn>
                </ReactModal>
                <div className="container">
                    <section className="mainContainer">

                        <div className="img-wrapper"
                        onClick={() => setIsImageModalOpen(true)}>
                            <img src={data.media} alt={data.name} onError={handleImageError}/>
                            
                        </div>
                        <VenueInfo data={data} />
                        
                    </section>

                    <div className="edit-btn">
                        {isUserOwner &&
                            <Link to={`/editvenue/${id}`}>
                                <EditBtn>Edit venue</EditBtn>
                            </Link>
                        }
                    </div>

                    <hr/>

                    <section className="bookingContainer">
                    {isUserOwner 
                        ? 
                        
                        <div className="bookings">
                            <h2>Bookings for this venue:</h2>
                            <div className="venueBookings">
                                <FetchVenueBookings bookings={data?.bookings || []} />
                            </div>
                        </div>
                        : (
                            <div className="bookVenue">
                                <h2>Want to book this venue?</h2>
                                <BookingCalendar selectedVenueId={id} isOpen={isModalOpen} closeModal={closeModal} />
                            </div>
                        )
                    }
                        
                    </section>
                </div>
                </StyledVenue>
            </main>
        </>
    );
};
