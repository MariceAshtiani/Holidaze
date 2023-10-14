import styled from "styled-components";

export default styled.div`
.updateVenueForm {
    background-color: rgba(3, 86, 135, 0.4);
    padding: 30px;
    border-radius: 50px;

    h1 {
        margin-bottom: 5%;
    }
}

@media (max-width: ${({ theme }) => theme.tablet}) {

h1 {
    font-size: 2rem;
}

}

@media (max-width: ${({ theme }) => theme.mobile}) {

    margin: 20px;
    padding-top: 10px;

h1 {
    font-size: 1.7rem;
    margin-top: 0;
}

}
`