import { NavLink } from "react-router-dom";
import { useUserStore } from "../../../../../Hooks/userStore"; 
import StyledMenu from "./styled.jsx";
import DropdownMenu from "./Dropdown";

export default function NavMenu() {
    const isLoggedIn = useUserStore((state) => state.isLoggedIn);
    const isVenueManager = useUserStore((state) => state.isVenueManager);


    return (
        <StyledMenu>
            <div className="menu">
            <ul className="nav-links">
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                {isLoggedIn ? (
                    <>
                    <li>
                        <DropdownMenu
                        items={
                            isVenueManager 
                            ? [
                                { id: 1, label: "View Profile", link: "/Profile" },
                                { id: 2, label: "Your Venues", link: "/#" },
                                { id: 3, label: "Log out", link: "/#" },
                            ]
                            : [
                                { id: 1, label: "View Profile", link: "/Profile" },
                                { id: 2, label: "Your Bookings", link: "/#" },
                                { id: 3, label: "Log out", link: "/#" },
                            ]
                        }
                        />
                    </li>
                    <li>
                        <NavLink to="/Listings">Listings</NavLink>
                    </li>
                    </>
                ) : (
                    <>
                    <li>
                        <NavLink to="/Register">Register</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Login">Sign in</NavLink>
                    </li>
                    </>
                )}
            </ul>
            </div>
        </StyledMenu>
        
    );
}