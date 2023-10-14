import { ThemeProvider } from "styled-components";

const theme = {
    mobile: "500px",
    tablet: "900px",
};

const Theme = ({ children }) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;