import { useState } from "react";
import StyledDropdown from "./styled";
import { NavLink } from "react-router-dom";

export default function DropdownMenu({ items }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <StyledDropdown>
        <div className="dropdown"
        onClick={() => toggleDropdown()}>
            <span className="dropdown-button">Profile</span>
            {isOpen && (
                <ul className="dropdown-menu">
                    {items.map((item) => (
                        <li key={item.id}>
                            <NavLink to={item.link} className="nav-link">{item.label}</NavLink>
                        </li>
                    ))}
                </ul>
            )}
        </div>
        </StyledDropdown>
    );
}