import styled from "styled-components";

export default styled.div`
    text-align: center;
    background-image: url("/Images/confirmation.jpg");
    background-repeat: no-repeat;
    background-size: cover;

    .confirmationContainer {
        backdrop-filter: blur(10px);
        background-color: rgba(152, 152, 152, 0.407);
        max-width: 1500px;
        width: 100%;
        height: 50vh;
        margin: 0 auto;
        padding: 40px;
        margin-top: 40px;
        border-radius: 20px;
    }
        
    h1 {
        margin-bottom: 40px;
    }

    h2 {
        margin-bottom: 40px;
        font-size: 2rem;
    }

    p {
        max-width: 900px;
        margin: 0 auto;
        margin-bottom: 7%;
        font-size: 1.3rem;
    }

    @media (max-width: ${({ theme }) => theme.tablet}) {

        p {
            margin-bottom: 10%;
        }
}

    @media (max-width: ${({ theme }) => theme.mobile}) {
        h2 {
            font-size: 1.2rem;
        }

        p {
            margin-bottom: 20%;
            font-size: 1rem;
        }
}
`