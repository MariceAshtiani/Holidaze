
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useUserStore } from "../../../../Hooks/userStore";
import { HandleUpdateProfile} from "../../../../Handlers/HandleProfileUpdate";
import StyledProfileForm from "./styled";
import BasicButton from "../../Buttons/styled";
import { toast } from "react-toastify";

// Validation schema using Yup

const schema = yup.object({
    avatar: yup.string()
        .required("Please enter a valid url")
});

export default function ProfileForm() {

    const setUserProfile = useUserStore((state) => state.setUserProfile);

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = async (data) => {

        //Make API request to update profile
        try {
            const avatar = data
            const updatedProfile = await HandleUpdateProfile(avatar);
            setUserProfile(updatedProfile);  
            
            toast.success('Avatar updated successfully');
        } catch (error) {
            console.error("Error updating profile", error);

            toast.error('Failed to update avatar');
        }
    };

    return (
        <StyledProfileForm>
            <div className="profile-form">
                
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h2>Edit profile</h2>

                    <div className="form-input">
                        <label>Avatar URL: </label>
                            <input { ...register("avatar")} />
                            <p className="formError">{errors.avatar?.message}</p>
                    </div>
                    
                    <BasicButton type="submit">Save Changes</BasicButton>
                </form>
            </div>
        </StyledProfileForm>
    );
}