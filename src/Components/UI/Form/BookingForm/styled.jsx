import styled from "styled-components";

export default styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    max-width: 700px;
    width: 100%;
    height: auto;
    margin: 0 auto;
    padding: 10px;
    box-shadow: 0px 0px 20px 5px rgba(246,146, 7, 0.612);
    border-radius: 20px;
    backdrop-filter: blur(10px);
    background-color: rgba(248,207,153,0.5);
    margin-bottom: 30px;
    margin-top: 30px;

    label {
        font-weight: 700;
    }

    .booking-form {
        margin: 0 auto;
    }

    .input-group {
        margin-bottom: 5px;
    }

    .input-group div, .date-input > label{
        display: block;
        margin-bottom: 10px;
    }

    input {
        width: 100%;
        height: 2rem;
        border: 1px solid black;
        border-radius: 10px;
        text-indent: 15px;
    }

    .date-input input{
        width: 100%;
    }

    .venue-input input{
        cursor: not-allowed;
        background-color: darkgray;
    }

    .BookingBtnGroup {
        display: flex;
        flex-direction: column;
        margin-top: 20px;
        margin-bottom: 20px;
        gap: 20px;
    }

    button {
        margin: 0 auto;
    }

    .cancel-btn {
        margin-top: 20px;
    }

    .error{
        color: red;
        margin-top: 5px;
    }

    @media (max-width: ${({ theme }) => theme.tablet}) {
        margin-top: 0px;
        margin-bottom: 0px;

        input {
            height: 1.5rem;
        }
    }

    @media (max-width: ${({ theme }) => theme.mobile}) {

}
`;