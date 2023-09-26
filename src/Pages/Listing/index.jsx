import { useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link, useParams } from "react-router-dom";
import ReactModal from "react-modal";

import ApiHook from "../../Hooks/apiFetch";
import { venues } from "../../Api/constants";
import Loader from "../../Components/UI/Loader";
import Rating from "../../Components/UI/Venues/Rating";
import BasicButton, {AdvancedBtn, SmallBtn} from "../../Components/UI/Buttons/styled";
import ModalStyles, { imageModalStyle } from "../../Styles/ModalStyles";
import StyledVenue from "./styled";
import { FaWifi, FaCar, FaUtensils, FaPaw } from "react-icons/fa";
ReactModal.setAppElement("#root");

export default function VenuePage() {
    let { id } = useParams();
    const url = `${venues}/${id}`;
    const { data, isLoading, isError } = ApiHook(url);
    const [isImageModalOpen, setIsImageModalOpen] = useState(false)

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
                            <img src={data.media}></img>
                        </div>
                        <div className="venueInfo">
                            <h1>{data.name}</h1>
                            {data.rating > 0 && (
                                <div className="rating">
                                    <Rating rating={data.rating} />
                                </div>
                            )}
                            <h2>Price: {data.price}</h2>
                            <p>{data.description}</p>
                            <div className="meta">
                                <p> {data.meta?.wifi ? <FaWifi /> : "Not available"}</p>
                                <p>{data.meta?.parking ? <FaCar /> : "Not available"}</p>
                                <p>{data.meta?.breakfast ? <FaUtensils /> : "Not included"}</p>
                                <p>{data.meta?.pets ? <FaPaw /> : ""}</p>
                            </div>
                        </div>
                    </section>
                    <section className="bookingContainer">
                        <h2>Want to book this venue?</h2>
                        <div>Form with available dates here</div>
                        <BasicButton>Book now</BasicButton>
                    </section>
                </div>
            </StyledVenue>
            </>
    );
};