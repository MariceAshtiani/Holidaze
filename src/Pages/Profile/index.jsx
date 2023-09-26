import { Helmet, HelmetProvider } from "react-helmet-async";
import { useEffect, useState } from "react";
import { getProfile } from "../../Api/Auth/Profile/profile";
import { useUserStore } from "../../Hooks/userStore";
import RenderProfile from "../../Components/UI/Profile";
import Loader from "../../Components/UI/Loader";

export default function ProfilePage() {
    const [profileData, setProfileData] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const user = useUserStore();

    useEffect(() => {
        if (user) {
        //Fetch user's profile data when the component mounts
        getProfile(user.name)
        .then((data) => {
            setProfileData(data);
        })
        .catch((error) => {
            console.error("Error fetching profile data", error);
        })
        .finally(() => {
            setIsLoading(false);
        });
    }
    }, []);

    return (
        <>
            <HelmetProvider>
                <Helmet>
                    <title>Holidaze | Profile</title>
                </Helmet>
            </HelmetProvider>
            <main>
                <div>
                    {isLoading ? (
                        <Loader />
                    ) : (
                        <RenderProfile
                        profileData={profileData}
                        name={profileData.name}
                        email={profileData.email}
                        avatar={profileData.avatar}
                        venueManager={profileData.venueManager}
                        />
                    )}
                </div>
            </main>
        </>
    );
};