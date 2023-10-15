import styled from "styled-components";

export default styled.div`
        font-family: adage-script-jf, sans-serif;
        padding-right: 20px;
        font-weight: 900;

        a {
            color: darkred;
            font-size: min(6vmin, calc(2rem + 0.23vmax));
        }

        a:hover {
            color: darkorange;
        }

        @media (max-width: ${({ theme }) => theme.tablet}) {
            a {
                font-size: 2.5vw;
            }
        }

        @media (max-width: ${({ theme }) => theme.mobile}) {
            a {
                font-size: 3vw;
            }
        }
`;