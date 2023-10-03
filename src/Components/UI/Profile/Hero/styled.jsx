import styled from "styled-components";

export default styled.div`
    display: flex;
    justify-content: center;
    background-image: url("/Images/profileHero.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    max-width: 2000px;
    width: 100%;
    height: 20vh;

    @media (max-width: ${({ theme }) => theme.mobile}) {
        margin-top: 20px;
    }
    
`