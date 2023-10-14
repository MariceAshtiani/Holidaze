import styled from "styled-components"

export default styled.div`

.bookings {
   display: flex;
   flex-direction: row;
   flex-wrap: wrap;
   gap: 20px;
   justify-content: start;
}

@media (max-width: ${({ theme }) => theme.tablet}) {

  
}

@media (max-width: ${({ theme }) => theme.mobile}) {
 h2 {
    text-align: center;
 }

}`