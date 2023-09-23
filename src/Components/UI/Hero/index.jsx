import StyledHero from "./styled";
import BasicButton from "../Buttons/styled";
import { Link } from "react-router-dom";

export default function Hero() {
    return (
        <StyledHero className="hero">
            <div className="heroInner">
                <span>
                    <h1>Holidaze</h1>
                    <p>Start your journey here</p>
                    <BasicButton className="explore-btn">
                        <Link to="/listings">Explore</Link>
                    </BasicButton>
                </span>
            </div>
        </StyledHero>
    );
};