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
            color: black;
        }

    .nav-link:hover {
        color: darkorange;
    }

    .active {
        text-decoration: underline;
        color: black;
    }

    .menu-icon {
        font-size: 2rem;
        cursor: pointer;
        margin-top: 15px;
        position: absolute;
        right: 0px;
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
        top: 50px;
        z-index: 10;
        padding: 30px 10px;
    }

    .logoutButton {
        border: none;
        background-color: #F8CF99;
        font-size: 1.5rem;
        font-weight: bold;
        color: black;
        cursor: pointer;
        padding: 0;
    }

    .logoutButton:hover {
        color: darkred;
    }


    @media (max-width: ${({ theme }) => theme.tablet}) {
        ul {
        }
    }

    @media (max-width: ${({ theme }) => theme.mobile}) {

        .menu-icon {
            font-size: 1.5rem;
            cursor: pointer;
            margin-top: 5px;
            position: absolute;
            right: 0px;
            width: 50px;
        }


        .close-icon {
        margin-top: 0;
    }

    .column-layout {
        top: 30px;
    }

        ul {
            font-size: 1rem;
        }
    }
`;