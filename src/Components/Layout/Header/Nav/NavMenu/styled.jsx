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
            color: darkorange;
        }

    .nav-link:hover {
        color: white;
    }

    .active {
        text-decoration: underline;
        color: black;
    }

    @media (max-width: ${({ theme }) => theme.tablet}) {
        ul {
        }
    }

    @media (max-width: ${({ theme }) => theme.mobile}) {
        ul {
            font-size: 1rem;
        }
    }
`;