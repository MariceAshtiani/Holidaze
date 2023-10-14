import Logo from "./Logo";
import NavBar from "./Nav";
import StyledHeader from "./styled";

export default function Header() {
    return (
        <StyledHeader>
            <Logo />
            <NavBar />
        </StyledHeader>
    );
};