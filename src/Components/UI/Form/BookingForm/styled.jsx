import styled from "styled-components";

export default styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 700px;
    width: 100%;
    height: auto;
    margin: 0 auto;
    padding: 20px;
    box-shadow: 0px 0px 20px 5px rgba(246,146, 7, 0.612);
    border-radius: 20px;
    backdrop-filter: blur(10px);
    background-color: rgba(248,207,153,0.5);
    margin-bottom: 50px;
    margin-top: 50px;

    label {
        font-weight: 700;
    }

    h1 {
        font-size: 2.5rem;
    }

    .booking-form {
        margin: 0 auto;
    }

    .input-group {
        flex-direction: column;
        margin-bottom: 20px;
    }

    .input-group div {
        margin-bottom: 10px;
    }

    input {
        width: 100%;
        height: 2rem;
        border: 1px solid black;
        border-radius: 10px;
        text-indent: 15px;
    }

    .date-input {
        display: flex;
        flex-direction: column;
    }

    .venue-input input{
        cursor: not-allowed;
        background-color: darkgray;
    }

    .react-datepicker-wrapper input {
        margin-bottom: 10px;
    }

    .BookingBtnGroup {
        display: flex;
        flex-direction: column;
        margin-top: 20px;
        gap: 20px;
    }

    button {
        margin: 0 auto;
        margin-top: 20px;
    }

    .error{
        color: red;
    }

    @media (max-width: ${({ theme }) => theme.tablet}) {
        margin-top: 0px;
        margin-bottom: 0px;
    }
    @media (max-width: ${({ theme }) => theme.mobile}) {

        h1{ 
            font-size: 2rem;
        }

        label {
            font-size: 1rem;
        }
}
`;