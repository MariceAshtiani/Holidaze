import styled from "styled-components";

export default styled.h2`
    
    text-align: center;
    margin: 30px;
    font-size: 3rem;

    @media (max-width: ${({ theme }) => theme.tablet }) {
        font-size: 2rem;
    }

    @media (max-width: ${({ theme }) => theme.mobile }) {
        font-size: 1.5rem;
    }
    
`