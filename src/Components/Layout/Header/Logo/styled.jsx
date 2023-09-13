import styled from "styled-components";

export default styled.div`
        font-family: "Segoe UI";
        font-size: 3rem;
        padding-right: 20px;
        font-weight: 900;

        a {
            color: darkorange;
        }

        a:hover {
            color: white;
        }

        @media (max-width: ${({ theme }) => theme.mobile}) {
            font-size: 1.5rem;
        }
`;