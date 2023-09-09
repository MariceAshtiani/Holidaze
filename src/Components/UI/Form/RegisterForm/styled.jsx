import styled from "styled-components";


export default styled.form`
    display: flex;
    flex-direction: column;
    gap: 15px;
    max-width: 1000px;
    width: 100%;
    margin: 0 auto;
    padding: 30px;
    box-shadow: 0px 0px 20px 5px rgba(246,146, 7, 0.612);
    border-radius: 20px;
    backdrop-filter: blur(10px);
    background-color: rgba(248,207,153,0.5);


    div {
        display: flex;
        gap: 20px;
    }

    .input-group {
        flex-direction: column;
        margin-bottom: 20px;
    }

    label {
        flex: 1;
        font-weight: 700;
    }

    input {
        flex: 2;
        width: 100%;
        height: 2rem;
        border: 1px solid black;
        border-radius: 10px;
        text-indent: 15px;
    }

    button {
        margin: 0 auto;
        margin-top: 20px;
    }

    .goToSignin {
        flex-direction: column;
        margin: 0 auto;
        text-align: center;
        font-weight: 700;

        a {
            text-decoration: underline;
            font-style: italic;
            font-weight: 600;
        }
    }
`;