import { useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useParams } from "react-router-dom";
import ReactModal from "react-modal";

import ApiHook from "../../Hooks/apiFetch";
import { venues } from "../../Api/constants";
import Loader from "../../Components/UI/Loader";
import {SmallBtn} from "../../Components/UI/Buttons/styled";
import { imageModalStyle } from "../../Styles/ModalStyles";
import StyledVenue from "./styled";
import VenueInfo from "../../Components/UI/Venue";
import BookingCalendar from "../../Components/UI/Calendar";
ReactModal.setAppElement("#root");


export default function VenuePage() {
    let { id } = useParams();
    const url = `${venues}/${id}?_bookings=true`;
    const { data, isLoading, isError } = ApiHook(url);
    const [isImageModalOpen, setIsImageModalOpen] = useState(false)
    const defaultImage = "/src/Images/defaultimage.jpg";

    const handleImageError = (event) => {
        event.target.src = defaultImage;
    }

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

    return (
        <>
        <HelmetProvider>
            <Helmet>
                <title>Holidaze | Venue</title>
            </Helmet>
            </HelmetProvider>
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

                    <hr/>

                    <section className="bookingContainer">
                        <h2>Want to book this venue?</h2>
                        <BookingCalendar selectedVenueId={id} />
                    </section>
                </div>
            </StyledVenue>
            </>
    );
};
