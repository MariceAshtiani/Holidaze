import styled from "styled-components";

export default styled.main`
    .img-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        max-height: 60vh;
        object-fit: cover;
        margin: auto;
        overflow: hidden;
    }

    img {
        max-width: 100%;
        height: 100%;
    }

    h1 {
        margin-bottom: 20px;
        margin-top: 0px;
    }

    .tags, .rating {
        display: flex;
        gap: 1rem;

        p {
            margin: 0;
        }
    }

    .star {
        color: orange;
    }

    .rating {
        margin: 0;
    }

    .venueInfo p{
        margin-bottom: 2rem;
    }

    .meta {
        display: flex;
        flex-direction: row;
        gap: 20px;
    }

    .bookingContainer {
        text-align: center;

        button {
            margin-top: 10%;
        }
    }

`;