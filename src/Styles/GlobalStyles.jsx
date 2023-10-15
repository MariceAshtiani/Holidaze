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
        font-size: min(6vmin, calc(1rem + 0.23vmax));
    }

    h1 {
        font-size: min(6vmin, calc(2rem + 0.23vmax));
        text-align: center;
    }

    h2 {
        font-size: min(6vmin, calc(1.8rem + 0.23vmax));
    }

    h3 {
        font-size: min(6vmin, calc(1rem + 0.23vmax));
    }

    p, label {
        font-size: min(6vmin, calc(0.8rem + 0.23vmax));
    }

    li::marker {
        content: none;
    }

    .registerMain {
        background-image: URL("/Images/background-image.jpg");
        background-attachment: fixed;
        height: 100%;
        min-height: 600px;
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

        }
    }
`;

export default GlobalStyle;