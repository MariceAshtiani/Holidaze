import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
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

    // Media query to check screen width
    const isMobileScreen = window.innerWidth <= 700;


    return (
        <StyledMenu>
            <div className="menu">
                {isMobileScreen ? (
                    // Render hamburger menu when on mobile screen
                    <>
                        <div className="mobile-header">
                            {isMobileMenuOpen ? (
                                <FaTimes onClick={toggleMobileMenu} className="menu-icon close-icon" />
                            ) : (
                                <FaBars onClick={toggleMobileMenu} className="menu-icon open-icon" />
                            )}
                        </div>
                        {isMobileMenuOpen && (
                            <ul className="nav-links column-layout">
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
                        )}
                    </>
                ) : (
                    // Render desktop menu for screens larger than 500px
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
                )}
            </div>
        </StyledMenu>
    );
}





