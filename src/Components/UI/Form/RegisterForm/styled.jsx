import styled from "styled-components";


export default styled.form`
    display: flex;
    flex-direction: column;
    gap: 15px;
    max-width: 1000px;
    width: 100%;
    margin: 0 auto;
    padding-top: 0px;
    padding-bottom: 20px;
    box-shadow: 0px 0px 20px 5px rgba(246,146, 7, 0.612);
    border-radius: 20px;
    backdrop-filter: blur(10px);
    background-color: rgba(248,207,153,0.5);

    h2 {
        margin: 0 auto;
        padding: 20px;
    }

    .input-group {
        flex-direction: column;
        margin-bottom: 20px;
        max-width: 90%;
        margin: 0 auto;
    }

    label {
        font-weight: 700;
    }

    input {
        width: 100%;
        height: 2rem;
        border: 1px solid black;
        border-radius: 10px;
        text-indent: 15px;
    }

    .venueManagerOption {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        height: 80px;
        margin: 0 auto;
    }

    .venueManagerCheckbox {
        cursor: pointer;
        
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
        margin-bottom: 10px;

        a {
            text-decoration: underline;
            font-style: italic;
            font-weight: 600;
            color: blue;
        }
    }


    .registerFormError{
        color: red;
        margin-top: 10px;
    }

    @media (max-width: ${({ theme }) => theme.tablet}) {


        input {
        width: 100%;
        height: 1.5rem;
        }

        button {
            margin-top: 30px;
        }
    }

    @media (max-width: ${({ theme }) => theme.mobile}) {

        .input-group div {
            display: block;
            max-width: 100%;
        }

        button {
            margin-top: 30px;
        }
}
`;