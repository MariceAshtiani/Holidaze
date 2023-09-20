import styled from "styled-components";

export default styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    height: 400px;
    box-shadow: 0 0 10px rgba(246, 116, 3, 0.453);
    overflow: hidden;
    border-radius: 5%;
    cursor: pointer;

    h3 {
        margin: 10px;
    }

    img {
        width: 100%;
        height: 65%;
        object-position: center;
        object-fit: cover;
        overflow: hidden;
    }

    .productCardText {
        color: black;
        padding: 10px;
    }

    span {
        display: block;
        position: absolute;
        width: 100%;
        color: red;
        font-size: 2rem;
        font-weight: bolder;
        text-align: center;
    }

    p {
        margin: 10px;
    }
`;