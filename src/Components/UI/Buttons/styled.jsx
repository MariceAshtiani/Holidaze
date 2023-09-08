import styled from "styled-components";

const BasicButton = styled.button`
    background-color: orange;
    border-radius: 10px;
    border: 2px solid darkorange;
    box-shadow: 0 0 10px rgba(252, 156, 2, 0.579);
    color: black;
    font-weight: bold;
    font-size: 1rem;
    padding: 15px 50px;
    margin-right: 1rem;
    margin-bottom: 1rem;
    cursor: pointer;
    &:hover {
        transform: scale(0.95);
        opacity: 0.7;
    }
`;

export const AdvancedBtn = styled(BasicButton)`
    background-color: #272726;
    color: white;
    border: 3px solid orange;
`;

export const SmallBtn = styled(AdvancedBtn)`
    background-color: #272726;
    color: white;
    border: 3px solid orange;
    padding: 5px 10px;
    margin: 0 auto;
    margin-bottom: 10px;

`;

export default BasicButton;