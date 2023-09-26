//import StyledProfile from "./styled.jsx";

export default function RenderProfile({ profileData }) {
    const { name, email, avatar, venueManager } = profileData;

    return (
            <div className="profile">
                <img src={avatar} alt={name} />
                <h1>{name}</h1>
                <h2>{venueManager}</h2>
                <p>{email}</p>
                <button>Edit avatar</button>
            </div>
    );
};