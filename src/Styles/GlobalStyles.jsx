import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    
    *{
        box-sizing: border-box;
    }

    html {
        height: 100%;
    }

    body {
        font-family: "segoe UI";
        margin: 0;
    }

    #root >div {
        min-height: 100vh;
        display: grid;
        grid-template-rows: auto 1fr auto;
    }

    main {
        max-width: 1500px;
        width: 100%;
        padding: 2rem;
        margin: 0 auto;
    }

    section {
        flex: 1;
        margin: 0 auto;
    }

    img {
        max-width: 100%;
    }    
    
    a {
        text-decoration: none;
        font-size: 1.3vw;
    }

    h1 {
        font-size: 2.5vw;
        text-align: center;
    }

    h2 {
        font-size: 2vw;
    }

    h3 {
        font-size: 1.8vw;
    }

    h4 {
        font-size: 1.5vw;
    }

    p {
        font-size: 1vw;
    }

    li::marker {
        content: none;
    }

    .registerMain {
        background-image: URL("/Images/background-image.jpg");
        height: 120vh;
        max-width: 2000px;
        width: 100%;
        background-repeat: no-repeat;
    }

    .mainContainer {
        display: flex;
        max-width: 1500px;
        margin: 0 auto;
        gap: 2rem;
        padding: 2rem;
        align-items: baseline;

        >* {
            text-align: top;
            flex: 1;
        }

        .loader {
            text-align: center;
        }

        @media (max-width: ${({ theme }) => theme.tablet}) {

            flex-direction: column;

            a {
                text-decoration: none;
                font-size: 1.8vw;
            }

            h1 {
                font-size: 3vw;
                text-align: center;
            }

            h2 {
                font-size: 2.5vw;
            }

            h3 {
                font-size: 2vw;
            }

            h4 {
                font-size: 1.8vw;
            }

            p {
                font-size: 1.5vw;
            }
        }
    }
   

        @media (max-width: ${({ theme }) => theme.mobile}) {
            h1 {
                font-size: 1.5rem;
            }

            main {
                padding: 0;
            }
        }
`;

export default GlobalStyle;