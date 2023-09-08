import styled from "styled-components";

export default styled.div`
    display: flex;
    height: 60vh;
    background-image: url("/Images/Holidaze-header.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    margin: auto;

    @media (max-width: ${({ theme }) => theme.tablet}) {
        height: 50vh;
    }

    @media (max-width: ${({ theme }) => theme.mobile}) {
        height: 30vh;
        margin-bottom: 10px;
    }
`;