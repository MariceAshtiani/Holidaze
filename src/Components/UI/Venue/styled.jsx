import styled from "styled-components";

export default styled.div`
        h1 {
        margin-bottom: 20px;
        margin-top: 0px;
        text-align: left;
    }

    .rating {
        display: flex;
        gap: 1rem;

        p {
            margin: 0;
        }
    }

    
    .rating-count {
        line-height: 1.5;
    }

    .venueInfo p{
        margin-bottom: 2rem;
    }

    .meta {
        display: flex;
        flex-direction: row;
        align-items: flex-end;
        gap: 20px;
    }

    @media (max-width: ${({ theme }) => theme.tablet }) {

        display: flex;
        flex-direction: column;

    }

    @media (max-width: ${({ theme }) => theme.mobile }) {


        .meta {
            display: grid;
            grid-template: auto auto/ repeat(2, 1fr);
        }
    }

`;