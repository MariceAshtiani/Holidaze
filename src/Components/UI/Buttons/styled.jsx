import styled from "styled-components";

const BasicButton = styled.button`
    background-color: orange;
    border-radius: 10px;
    border: 2px solid darkorange;
    box-shadow: 0 0 20px black;
    color: black;
    font-weight: bold;
    font-size: 1.2rem;
    padding: 10px 25px;
    cursor: pointer;
    &:hover {
        transform: scale(0.95);
        opacity: 0.7;
    }
`;

export const AdvancedBtn = styled(BasicButton)`
    background-color: lightblue;
    border: 3px solid darkblue;
`;

export const DeleteButton = styled(AdvancedBtn)`
    background-color: red;
    border: 3px solid black;
    width: 30%;
    font-weight: 700;
`

export const SmallBtn = styled(AdvancedBtn)`
    background-color: #272726;
    color: white;
    border: 3px solid orange;
    padding: 5px 10px;
    margin: 0 auto;
    margin-bottom: 10px;

`;

export const FormBtn = styled(SmallBtn)`
    background-color: orange;
    border-radius: 10px;
    border: 2px solid darkorange;
    box-shadow: 0 0 10px black;
    color: black;
    font-weight: bold;
    font-size: 1rem;
    padding: 10px 20px;
    cursor: pointer;
    margin-top: 10px;
    &:hover {
        transform: scale(0.95);
        opacity: 0.7;
    }
`;

export const EditBtn = styled(FormBtn)`
    background-color: lightpink;
    border: 2px solid darkorchid;
`


export default BasicButton;