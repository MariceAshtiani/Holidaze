import StyledProfile from "./styled";
import ProfileHero from "./Hero";

export default function RenderProfile({ profileData }) {
    const { name, email, avatar, venueManager } = profileData;
    const defaultAvatar = "/src/Images/defaultAvatar.jpg";

    return (
        <StyledProfile>
            <div className="profile-hero">
                <ProfileHero />
            </div>
            <div className="profile">
                <img 
                src={avatar || defaultAvatar} 
                alt={name} 
                className="avatar"/>
                <h1>{name}</h1>
                <h2>{venueManager}</h2>
                <p>{email}</p>
            </div>
        </StyledProfile>
    );
};