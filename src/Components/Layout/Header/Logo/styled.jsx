import styled from "styled-components";

export default styled.div`
        font-family: adage-script-jf, sans-serif;
        font-size: 3rem;
        padding-right: 20px;
        font-weight: 900;

        a {
            color: darkred;
        }

        a:hover {
            color: darkorange;
        }

        @media (max-width: ${({ theme }) => theme.mobile}) {
            font-size: 1.5rem;
        }
`;