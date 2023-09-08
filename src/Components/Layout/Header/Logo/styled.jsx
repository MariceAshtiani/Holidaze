import styled from "styled-components";

export default styled.div`
        font-family: "Segoe UI";
        font-sixe: 3rem;

        @media (max-width: ${({ theme }) => theme.mobile}) {
            font-size: 1.5rem;
        }
`;