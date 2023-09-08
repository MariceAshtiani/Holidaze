import styled from "styled-components";


export default styled.form`
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 100%;
    margin: 0 auto;
    padding: 30px;
    box-shadow: 0px 0px 20px 5px rgba(246,146, 7, 0.612);
    border-radius: 20px;

    div {
        display: flex;
        justify-content: space-between;
        gap: 20px;
    }

    .input-group {
        flex-direction: column;
        margin-bottom: 20px;
    }

    label {
        flex: 1;
        font-weight: 600;
    }

    input, text-area {
        flex: 2;
        width: 100%;
        height: 2rem;
        border: 1px solid black;
        border-radius: 10px;
        text-indent: 15px;
    }

    textarea {
        padding-top: 5px;
        height: 90px;
        border-radius: 10px;
    }

    button {
        margin: 0 auto;
    }

    .success {
        color: darkorange;
    }
`;