export default {
    overlay: {
        background: "rgba(22, 22, 22, 0.843)",
    },
    content: {
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        maxWidth: "1500px",
        textAlign: "center",
        margin: "auto",
        border: "2px solid orange",
        borderRadius: "20px",
    },
};

export const imageModalStyle = {
    overlay: {
        background: "rgba(22, 22, 22, 0.74)",
        zIndex: "12",
    },
    content: {
        display: "flex",
        justifyContent: "center",
        flexDirection: "column-reverse",
        alignItems: "center",
        maxWidth: "1000px",
        maxHeight: "90vh",
        margin: "auto",
        border: "2px solid orange",
        borderRadius: "30px",
    },
};

// success/error-modals
import ReactModal from "react-modal";
import styled from "styled-components";

export const RegistrationSuccessModal = styled(ReactModal)`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(22, 22, 22, 0.843);
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
        height: auto;
        text-align: center;

        h1 {
            margin-bottom: 50px;
        }

        h2{
            margin-bottom: 50px;
        }

        a{
            text-decoration: underline;
            font-style: italic;
            color: white;

            &:hover {
                color: blue;
            }
        }

        button {
            background-color: #000000;
            color: white;
            border: none;
            padding: 10px 20px;
            cursor: pointer;
            border-radius: 4px;
            margin-top: 40px;
            transition: background-color 0.2s;

            &:hover {
                background-color: #c62828;;
            }
        }
    }

    @media (max-width: ${({ theme }) => theme.tablet}) {
            .modal-content {
                max-width: 400px;

                h1 {
                    margin-bottom: 30px;
                }

                h2{
                    margin-bottom: 30px;
                }

                button {
                    margin-top: 30px;
                }
            }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
        }

        @media (max-width: ${({ theme }) => theme.mobile}) {
            .modal-content {
                max-width: 300px;
                margin: 10px;

                h1 {
                    margin-bottom: 0px;
                }

                h2{
                    margin-top: 10px;
                    margin-bottom: 10px;
                }

                button {
                    margin-top: 20px;
                }
            }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
        }
`;

export const ErrorModal = styled(ReactModal)`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(22, 22, 22, 0.843);
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
        height: auto;
        text-align: center;

        h1 {
            margin-bottom: 30px;
        }

        h2{
            margin-bottom: 50px;
        }

        a{
            text-decoration: underline;
            font-style: italic;
            color: yellow;
            margin-top: 10px;

            &:hover {
                color: white;
            }
        }

        .already-registered{
            display: flex;
            flex-direction: column;
            margin-top: 50px;
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

                h2{
                    margin-bottom: 30px;
                }

                button {
                    margin-top: 40px;
                }
            }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
        }

        @media (max-width: ${({ theme }) => theme.mobile}) {
            .errorModal-content {
                max-width: 300px;
                margin: 10px;


                h2{
                    margin-top: 10px;
                    margin-bottom: 10px;
                }

                button {
                    margin-top: 10%;
                }
            }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
        }
`;

export const BookingModal = styled(ReactModal)`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(22, 22, 22, 0.843);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 10;

    .bookingModal-content {
        background-color: white;
        max-width: 1000px;
        width: 100%;
        height: auto;
        padding: 20px;
        border: 2px solid orange;
        border-radius: 20px;
        margin: 20px;

    }
`;

export const UpdateProfileModal = styled(ReactModal)`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(22, 22, 22, 0.843);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

`;

export const DeleteModal = styled(ReactModal)`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(48, 33, 33, 0.8);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    .deleteModal-content {
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
            font-size: 2rem;
        }

        p{
            font-size: 1.7rem;
            margin-bottom: 50px;
        }

        .buttons {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 50px;
            margin-top: 100px;
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