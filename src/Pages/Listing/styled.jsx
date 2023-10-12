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

    .edit-btn {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 20px;
    }

    .bookingContainer {
        padding: 20px;

        h2 {
            margin-bottom: 40px;
            text-align: center;
        }
        button {
            margin-top: 5%;
        }
    }

    @media (max-width: ${({ theme }) => theme.mobile }) {
        .venueBookings {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 20px;
        }
    }
`;