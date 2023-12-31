import styled from "styled-components";

export default styled.section`
    max-width: 1500px;
    width: 90%;
    background-image: url("/Images/header.jpg");
    background-repeat: no-repeat;
    background-position: center, bottom left;
    background-size: cover, cover;
    height: fit-content;
    margin: auto;
    border-radius: 20px;
    margin-top: 20px;
    margin-bottom: 5%;

    .heroInner {
        margin: 0 auto;
    }

    span {
        max-width: 50%;
    }

    h1 {
        font-family: adage-script-jf, sans-serif;
        font-style: normal;
        font-weight: 400;
        line-height: 2;
        text-align: left;
        margin-left: 40px;
    }

    h2 {
        font-family: adage-script-jf, sans-serif;
        font-style: normal;
        font-weight: 400;
        line-height: 0;
        padding-left: 7%;
    }

    .explore-btn {
        margin: 30px;
        margin-left: 20%;
    }

    .explore-btn a{
        color: black;
    }

    .explore-btn:hover, .explore-btn:focus{
        box-shadow: 0 0 0 2px #2e2e48, 0 0 0 4px #fafafc;
    }

    .explore-btn:active {
        transform: scale(0.95);
    }



    @media (max-width: ${({ theme }) => theme.tablet}) {
       margin-bottom: 20%;
    }

    @media (max-width: ${({ theme }) => theme.mobile}) {
        margin-bottom: 30%;

        .explore-btn {
        padding: 5px 18px;

            a{
                font-size: 0.7rem;
            }
        }
    }
`;