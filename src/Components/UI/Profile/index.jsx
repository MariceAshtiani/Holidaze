import StyledProfile from "./styled";
import ProfileHero from "./Hero";

export default function RenderProfile({ profileData }) {
    const { name, email, avatar, } = profileData;
    const defaultAvatar = "/src/Images/defaultAvatar.jpg";

    const handleImageError = (e) => {
        e.target.src = defaultAvatar;
    };

    return (
        <StyledProfile>
            <div className="profile-hero">
                <ProfileHero />
            </div>
            <div className="profile">
                <img 
                src={avatar || defaultAvatar} 
                alt={name} 
                className="avatar"
                onError={handleImageError}/>
                <h1>{name}</h1>
                <p>{email}</p>
            </div>
        </StyledProfile>
    );
};