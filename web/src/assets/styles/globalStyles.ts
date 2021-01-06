import { createGlobalStyle } from "styled-components";

const globalStyles = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;   
        font-family: 'Roboto', sans-serif;
    }
    body {
        background: #1F1F23;
    }
`;

export default globalStyles;
