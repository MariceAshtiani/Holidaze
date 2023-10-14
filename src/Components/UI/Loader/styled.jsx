import styled from "styled-components";

export const LoaderContainer = styled.div`
    display: ${(props) => (props.$isLoading === true ? "block" : "none")};
    border: 16px solid orange;
    border-top: 16px solid white;
    border-radius: 50%;
    width: 150px;
    height: 150px;
    animation: spin 2s linear infinite;
    margin: 0 auto;

    @keyframes spin {
        from {
            transform:rotate(0deg);
        }
        to {
            transform:rotate(360deg);
        }
    }
`;