import styled from "styled-components";

export default styled.div`
   
    form {
        display: flex;
        flex-direction: column;
        max-width: 1000px;
        width: 100%;
        height: auto;
        margin: 0 auto;
        padding: 50px;
        border-radius: 20px;
        backdrop-filter: blur(10px);
        background-color: rgba(248,207,153,0.5);

        button {
            font-size: 1.3rem;
            padding: 10px;
            width: 70%;
            margin: 0 auto;
            margin-top: 30px;
        }
    }
    
    .profile-form {
        background-color: white;
        border: 2px solid orange;
        border-radius: 20px;
        margin: 20px;

        h2 {
            font-size: 2rem;
            text-align: center;
        }

        label {
            font-weight: 700;
            margin-right: 20px;
        }

        input {
        width: 100%;
        height: 2rem;
        border: 1px solid black;
        border-radius: 10px;
        text-indent: 15px;
    }

        .form-input {
            margin: 20px;
            text-align: left;
        }
        
    }
`;