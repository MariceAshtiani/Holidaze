import { Helmet, HelmetProvider } from "react-helmet-async";
import { useState } from "react";
import { useUserStore } from "../../Hooks/userStore";
import RenderProfile from "../../Components/UI/Profile";
import Loader from "../../Components/UI/Loader";
import { useFetchProfile } from "../../Hooks/useFetchProfile";
import RenderBookings from "../../Components/UI/Profile/Bookings";
import RenderVenues from "../../Components/UI/Profile/Venues";
import ProfileForm from "../../Components/UI/Form/UpdateProfileForm";
import BasicButton, { AdvancedBtn, SmallBtn } from "../../Components/UI/Buttons/styled";
import ReactModal from "react-modal";
import { UpdateProfileModal } from "../../Styles/ModalStyles";
import StyledProfile from "./styledProfile";
import StyledBookings from "./styledBookings";
import StyledVenues from "./styledVenues";
ReactModal.setAppElement("#root");


export default function ProfilePage() {
    const { loading, error } = useFetchProfile();
    const profile = useUserStore((state) => state.profile);
    const bookings = useUserStore((state) => state.bookings);
    const venues = useUserStore((state) => state.venues);
    const [isModalOpen, setIsModalOpen] = useState(false);

    console.log("profile", profile);

    if(error) {
        return <div>{error}</div>;
    }

    if (loading || profile === null) {
        return <Loader />;
    }

    const HandleUpdateProfileClick = () => {
        setIsModalOpen(true);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
      };


    return (
        <>
            <HelmetProvider>
                <Helmet>
                    <title>Holidaze | Profile</title>
                </Helmet>
            </HelmetProvider>
            <main>
                <StyledProfile>
                    <div className="profile-container">
                        <RenderProfile
                        profileData={profile}
                        name={profile.name}
                        email={profile.email}
                        avatar={profile.avatar}
                        venueManager={profile.venueManager}
                        />
                        <div className="update-btn">
                            <BasicButton onClick={HandleUpdateProfileClick}>Update profile</BasicButton>
                        </div>
                        <UpdateProfileModal isOpen={isModalOpen}>
                            <div className="modal">
                                <div className="modal-content">
                                <SmallBtn className="modal-close" onClick={handleModalClose}>x</SmallBtn>
                                <ProfileForm 
                                onClose={handleModalClose}
                                />
                                </div>
                            </div>
                        </UpdateProfileModal>
                    </div>
                </StyledProfile>
                <hr />
                <StyledBookings>
                    <div className="bookings-container">
                        <h2>Your bookings ({bookings.length})</h2>
                        <RenderBookings bookings={bookings}/>
                    </div>
                </StyledBookings>
                <hr />
                {profile.venueManager && (
                <StyledVenues>
                    <div className="venues-container">
                        <h2>Your venues: ({venues.length})</h2>
                        <BasicButton>Create venue</BasicButton>
                        <RenderVenues venues={venues} />
                    </div>
                </StyledVenues>
                )}
            </main>
        </>
    );
};