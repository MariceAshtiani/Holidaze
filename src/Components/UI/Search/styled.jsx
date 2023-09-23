import styled from "styled-components";

export default styled.div`
    display: flex;
    justify-content: center;

    input {
        width: 50%;
        border: 1.5px solid black;
        border-radius: 50px;
        margin-bottom: 30px;
        padding: 10px;
        text-indent: 10px;
    }

    @media (max-width: ${({ theme }) => theme.mobile}) {
        input {
            width: 80%;
        }
    }
`;