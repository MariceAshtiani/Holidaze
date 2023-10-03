import styled from "styled-components";

export default styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 0 auto;

    .profile {
        margin: 0 auto;
        text-align: center;

        p {
            margin-bottom: 25%;
        }

        button {
            margin-bottom: 20%;
        }
    }

    .avatar{
        max-width: 200px;
        width: 100%;
    }

    .avatar img {
        text-align: center;
        margin: 0 auto;
    }
`