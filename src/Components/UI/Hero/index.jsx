import StyledHero from "./styled";
import BasicButton from "../Buttons/styled";
import { Link } from "react-router-dom";

export default function Hero() {
    return (
        <StyledHero className="hero">
            <div className="heroInner">
                <span>
                    <h1>Holidaze</h1>
                    <h2>Start your journey here</h2>
                    <BasicButton className="explore-btn">
                        <Link to="/listings">Explore</Link>
                    </BasicButton>
                </span>
            </div>
        </StyledHero>
    );
};