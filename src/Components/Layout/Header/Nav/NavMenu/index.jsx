import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useUserStore } from "../../../../../Hooks/userStore"; 
import StyledMenu from "./styled.jsx";
import DropdownMenu from "./Dropdown";
import { FaBars, FaTimes } from "react-icons/fa"

export default function NavMenu() {
    const isLoggedIn = useUserStore((state) => state.isLoggedIn);
    const isVenueManager = useUserStore((state) => state.isVenueManager);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };


    return (
        <StyledMenu>
            <div className="menu">

                {/* Hamburger menu button */}
                <button className="mobileMenu-button" onClick={toggleMobileMenu}>
                    <FaBars />
                </button>

            <ul className="nav-links">
                <li>
                    <NavLink to="/" className="nav-link">Home</NavLink>
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
                        <NavLink to="/Listings" className="nav-link">Listings</NavLink>
                    </li>
                    </>
                ) : (
                    <>
                    <li>
                        <NavLink to="/Register" className="nav-link">Register</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Login" className="nav-link">Sign in</NavLink>
                    </li>
                    </>
                )}
            </ul>
            </div>
        </StyledMenu>
        
    );
}