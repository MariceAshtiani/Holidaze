import styled from "styled-components";

export default styled.div`
    cursor: pointer;

    .nav-links {
        display: flex;
        list-style: none;
        padding: 0;
    }


    .nav-links li {
        margin-left: 20px;
    }

    a {
            font-weight: bold;
            color: rgba(0, 0, 0, 0.7);
        }

    .nav-link:hover {
        color: darkorange;
    }

    .active {
        text-decoration: underline;
        color: black;
    }

    .menu-icon {
        font-size: 3vw;
        cursor: pointer;
        position: absolute;
        right: 0px;
        top: 5px;
        width: 50px;
    }

    .close-icon {
        margin-top: 0;
    }

    .column-layout {
        flex-direction: column;
        align-items: flex-start;
        position: absolute;
        background-color: #F8CF99;
        right: 0;
        top: 15px;
        z-index: 10;
        padding: 20px 10px;
        border: 1px solid black;

        & li {
            margin-bottom: 10px;
        }
    }

    .logoutButton {
        border: none;
        background-color: #F8CF99;
        font-size: 1.3vw;
        font-weight: bold;
        margin-top: 4px;
        color: black;
        cursor: pointer;
        padding: 0;
        color: rgba(0, 0, 0, 0.7);
    }

    .logoutButton:hover {
        color: darkred;
    }

    @media (max-width: ${({ theme }) => theme.mobile}) {

        .menu-icon {
            top: 10px;
        }
    }
`;