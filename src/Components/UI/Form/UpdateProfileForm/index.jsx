import { useState } from "react";
import { useUserStore } from "../../../../Hooks/userStore";
import { HandleUpdateProfile} from "../../../../Handlers/HandleProfileUpdate";
import StyledProfileForm from "./styled";
import BasicButton from "../../Buttons/styled";

export default function ProfileForm() {
    const [formData, setFormData] = useState({
        avatar: "",
    });

    const setUserProfile = useUserStore((state) => state.setUserProfile);
    const profile = useUserStore((state) => state.profile);
    const accessToken = useUserStore((state) => state.user.accessToken);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        //Make API request to update profile
        try {
            const updatedProfile = await HandleUpdateProfile(profile.name, formData.avatar, accessToken);
            setUserProfile(updatedProfile);                                                                                                         
        } catch (error) {
            console.error("Error updating profile", error);
        }
    };

    return (
        <StyledProfileForm>
            <div className="profile-form">
                
                <form onSubmit={handleSubmit}>
                    <h2>Edit profile</h2>
                    <div className="form-input">
                        <label>
                            Avatar URL:
                        </label>
                            <input
                            type="text"
                            name="avatar"
                            value={formData.avatar}
                            onChange={handleChange}
                            />
                    </div>
                    
                    <BasicButton type="submit">Save Changes</BasicButton>
                </form>
            </div>
        </StyledProfileForm>
    );
}