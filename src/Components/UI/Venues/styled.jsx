import styled from "styled-components";

export default styled.div`
    display: grid;
    grid-template: auto auto/ repeat(4, 1fr);
    gap: 3rem;
    margin: 10px;
    margin-top: 30px;

    .createBtn {
        grid-column: 1 / -1; 
        display: flex;
        justify-content: center;
        align-items: center; 
    }

    .loader {
        grid-column: 1 / -1; 
        display: flex;
        justify-content: center;
        align-items: center;
    }

    @media (max-width: ${({ theme }) => theme.tablet}) {
        grid-template: auto auto/ repeat(2, 1fr);
    }
    @media (max-width: ${({ theme }) => theme.mobile}) {
        grid-template: auto auto/ repeat(1, 1fr);
    }
`;