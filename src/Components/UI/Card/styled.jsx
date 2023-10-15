import styled from "styled-components";

export default styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    height: 400px;
    box-shadow: 0 0 10px rgba(246, 116, 3, 0.453);
    overflow: hidden;
    border-radius: 5%;
    cursor: pointer;

    h3 {
        margin: 10px;
    }

    img {
        max-width: 100%;
        height: 65%;
        object-position: center;
        object-fit: cover;
        overflow: hidden;
    }

    .venueCardText {
        color: black;
        padding: 10px;
    }

    .meta {
        display: flex;
        flex-direction: row;
    }

    p {
        margin: 10px;
    }

    .card-bottom {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .rating {
        display: flex;
        flex-direction: row;

        span {
            line-height: 3;
        }
    }

    .edit-btn  {
        margin: 0;
    }

`;