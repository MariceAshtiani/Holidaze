import styled from "styled-components";

export default styled.main`
    .img-wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 20px;
        align-items: center;
        max-height: 60vh;
        object-fit: cover;
        margin: auto;
        overflow: hidden;
    }

    img {
        max-width: 700px;
        width: 100%;
        max-height: 700px;
        height: 100%;
    }

    .bookingContainer {
        padding: 20px;
        text-align: center;

        h2 {
            margin-bottom: 40px;
        }
        button {
            margin-top: 5%;
        }
    }
`;