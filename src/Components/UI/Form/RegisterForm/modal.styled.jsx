import ReactModal from "react-modal";
import styled from "styled-components";

export const RegistrationSuccessModal = styled(ReactModal)`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(248, 207, 153, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    .modal-content {
        background-color: rgba(243, 156, 40, 0.8);
        padding: 20px;
        border-radius: 20px;
        max-width: 600px;
        width: 100%;
        height: 50vh;
        text-align: center;

        h1 {
            margin-bottom: 50px;
        }

        p{
            font-size: 2rem;
            margin-bottom: 50px;
        }

        a{
            font-size: 1.5rem;
            text-decoration: underline;
            font-style: italic;
            color: blue;
        }

        button {
            background-color: #000000;
            color: white;
            border: none;
            padding: 10px 20px;
            cursor: pointer;
            border-radius: 4px;
            margin-top: 30%;
            transition: background-color 0.2s;

            &:hover {
                background-color: #c62828;;
            }
        }
    }

    @media (max-width: ${({ theme }) => theme.tablet}) {
            .modal-content {
                max-width: 400px;
                height: 30vh;

                h1 {
                    margin-bottom: 30px;
                    font-size: 2rem;
                }

                p{
                    font-size: 1.5rem;
                    margin-bottom: 30px;
                }

                a{
                    font-size: 1.2rem;
                }

                button {
                    margin-top: 20%;
                }
            }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
        }

        @media (max-width: ${({ theme }) => theme.mobile}) {
            .modal-content {
                max-width: 300px;
                height: 20vh;
                margin: 10px;

                h1 {
                    margin-bottom: 0px;
                }

                p{
                    font-size: 1rem;
                    margin-top: 10px;
                    margin-bottom: 10px;
                }

                a{
                    font-size: 1rem;
                }

                button {
                    margin-top: 10%;
                }
            }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
        }
`;

export const ErrorModal = styled(ReactModal)`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(233, 4, 4, 0.479);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    .errorModal-content {
        background-color: rgba(82, 9, 9, 0.865);
        color: white;
        padding: 20px;
        border-radius: 20px;
        max-width: 600px;
        width: 100%;
        height: 50vh;
        text-align: center;

        h1 {
            margin-bottom: 50px;
        }

        p{
            font-size: 1.7rem;
            margin-bottom: 50px;
        }

        a{
            font-size: 1.5rem;
            text-decoration: underline;
            font-style: italic;
            color: yellow;
            margin-top: 10px;
        }

        .already-registered{
            display: flex;
            flex-direction: column;
            margin-top: 20%;
        }

        button {
            background-color: #000000;
            color: white;
            border: none;
            padding: 10px 20px;
            cursor: pointer;
            border-radius: 4px;
            margin-top: 15%;
            transition: background-color 0.2s;

            &:hover {
                background-color: #c62828;;
            }
        }
    }

    @media (max-width: ${({ theme }) => theme.tablet}) {
            .errorModal-content {
                max-width: 400px;
                height: 40vh;

                h1 {
                    margin-bottom: 30px;
                    font-size: 2rem;
                }

                p{
                    font-size: 1.3rem;
                    margin-bottom: 30px;
                }

                a{
                    font-size: 1.2rem;
                }

                button {
                    margin-top: 20%;
                }
            }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
        }

        @media (max-width: ${({ theme }) => theme.mobile}) {
            .errorModal-content {
                max-width: 300px;
                height: 35vh;
                margin: 10px;


                p{
                    font-size: 1rem;
                    margin-top: 10px;
                    margin-bottom: 10px;
                }

                a{
                    font-size: 1rem;
                }

                button {
                    margin-top: 10%;
                }
            }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
        }
`;