import styled from "styled-components";

export default styled.div`
    position: relative;
    height: 50vh;
    max-width: 1500px;
    width: 90%;
    margin: auto;

    img {
    border-radius: 20px;
    margin: 20px;
    object-fit: scale-down;

    }

    h1 {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 2rem;
    }

    @media (max-width: ${({ theme }) => theme.tablet}) {
        height: 50vh;
    }

    @media (max-width: ${({ theme }) => theme.mobile}) {
        height: 30vh;
        margin-bottom: 10px;
    }
`;