export default {
    overlay: {
        background: "rgba(22, 22, 22, 0.74)",
    },
    content: {
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        maxWidth: "500px",
        textAlign: "center",
        height: "50vh",
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