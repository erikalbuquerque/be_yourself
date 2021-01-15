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
        /* background: rgb(18, 18, 20) none repeat scroll 0% 0%; */
    }
`;

export default globalStyles;
