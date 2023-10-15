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
    background-color: white;

    .input-group {
        flex-direction: column;
        margin-bottom: 20px;
        max-width: 90%;
        margin: 0 auto;
    }

    label {
        font-weight: 700;
    }

    input, textarea {
        width: 100%;
        height: 2rem;
        border: 1px solid black;
        border-radius: 10px;
        text-indent: 15px;
    }

    textarea {
        height: 5rem;
    }

    .metaInputs {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        justify-content: space-between;
        margin-bottom: 20px;

        .meta-input {
            display: flex;
            flex-direction: row;
            align-items: center;

            label {
                width: 180px;
            }
            
            .meta-check {
            cursor: pointer;
            margin: 0 auto;
            vertical-align: middle;
            }
        }
    }

    .error{
        color: red;
        margin-top: 10px;
    }

    .create-btn {
        margin: 0 auto;
        margin-top: 30px;
    }

    @media (max-width: ${({ theme }) => theme.tablet}) {
        input {
            height: 1.5rem;
        }
    }

    @media (max-width: ${({ theme }) => theme.mobile}) {

        margin-top: 30px;
}
`;