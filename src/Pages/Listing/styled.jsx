import styled from "styled-components";

export default styled.main`

    .img-wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 20px;
        align-items: center;
        max-height: 60vh;
        max-width: 900px;
        width: 100%;
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

    .bookVenue {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        max-width: 400px;
        width: 100%;
        margin: 0 auto;
        padding: 20px;
    }

    .booking-button {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .venueBookings {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: flex-start;
        gap: 20px;
    }


    @media (max-width: ${({ theme }) => theme.tablet }) {


        .mainContainer {
            display: flex;
            flex-direction: column;
            max-width: 900px;
            width: 100%;
        }

        img {
            width: 80%;
        }

        .bookingContainer {
            max-width: 500px;
            width: 100%;
        }

        .venueBookings {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 20px;
        }
    }

    @media (max-width: ${({ theme }) => theme.mobile }) {
        .mainContainer {
            margin: 0 auto;
        }
    }
`;