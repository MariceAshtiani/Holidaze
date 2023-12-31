import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useUserStore } from "../../../../../Hooks/userStore"; 
import StyledMenu from "./styled.jsx";
import { FaBars, FaTimes } from "react-icons/fa";

export default function NavMenu() {
    const isLoggedIn = useUserStore((state) => state.isLoggedIn);
    const { logout } = useUserStore();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const navigate = useNavigate();

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleLinkClick = () => {
        setIsMobileMenuOpen(false);
    }

    // Media query to check screen width
    const isMobileScreen = window.innerWidth <= 900;

    const handleLogout = () => {
        //Call the logout action to log the user out
        logout();
        navigate("/"); //Navigate to the homepage
    };


    return (
        <StyledMenu>
            <div className="menu">
            {isMobileScreen ? (
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
                                <NavLink to="/" className="nav-link" onClick={handleLinkClick}>Home</NavLink>
                            </li>
                            {isLoggedIn ? (
                                <>
                                    <li>
                                        <NavLink to="/listings" className="nav-link" onClick={handleLinkClick}>Listings</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/profile" className="nav-link" onClick={handleLinkClick}>Profile</NavLink>
                                    </li>
                                    <li>
                                        <button className="nav-link logoutButton" onClick={handleLogout}>Sign out</button>
                                    </li>
                                </>
                            ) : (
                                <>
                                    <li>
                                        <NavLink to="/register" className="nav-link" onClick={handleLinkClick}>Register</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/login" className="nav-link" onClick={handleLinkClick}>Sign in</NavLink>
                                    </li>
                                </>
                            )}
                        </ul>
                    )}
                </>
                ) : (
                    // Render desktop menu for screens larger than 900px
                    <ul className="nav-links">
                        <li>
                            <NavLink to="/" className="nav-link">Home</NavLink>
                        </li>
                        {isLoggedIn ? (
                            <>
                            <li>
                                <NavLink to="/listings" className="nav-link">Listings</NavLink>
                            </li>
                                <li>
                                    <NavLink to="/profile" className="nav-link">Profile</NavLink>
                                </li>
                                <li>
                                    <button className="nav-link logoutButton" onClick={handleLogout}>Log Out</button>
                                </li>
                            </>
                        ) : (
                            <>
                                <li>
                                    <NavLink to="/register" className="nav-link">Register</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/login" className="nav-link">Sign in</NavLink>
                                </li>
                            </>
                        )}
                    </ul>
                )}
            </div>
        </StyledMenu>
    );
}