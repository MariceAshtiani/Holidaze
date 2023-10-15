import styled from "styled-components";

export default styled.div`


    .react-datepicker__current-month {
        font-size: 20px;
    }

    .react-datepicker {
        font-size: 15px;
        max-width: 600px;
        width: 100%;
    }

    .react-datepicker__day {
        width: 40px;
        height: 40px;
        line-height: 40px;
        margin: 20px;
    }

    .react-datepicker-popper .react-datepicker__navigation {
        display: none;
    }

    @media (max-width: ${({ theme }) => theme.tablet }) {
        
        .react-datepicker__day {
            width: 20px;
            height: 20px;
    }
    }

    @media (max-width: ${({ theme }) => theme.mobile }) {
        .react-datepicker__current-month {
        font-size: 15px;
        }

        .react-datepicker {
            font-size: 10px;
            max-width: 400px;
            width: 100%;
        }

        .react-datepicker__day {
            width: 5px;
            height: 5px;
    }
    }


`