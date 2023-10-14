import StyledLogo from "./styled";
import { Link } from "react-router-dom";

export default function Logo() {
    return (
        <StyledLogo>
            <Link to="/">Holidaze</Link>
        </StyledLogo>
    );
};