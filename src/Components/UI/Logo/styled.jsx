import styled from "styled-components";

export default styled.div`
    margin: 0 auto;
    text-align: center;

    img {
        max-width: 400px;
        width: 100%;
    }

    @media (max-width: ${({ theme }) => theme.tablet}) {
        img {
            width: 50%;
        }
}
`;