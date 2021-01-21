import styled, { createGlobalStyle } from "styled-components";

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
        /* Works on Firefox */
        * {
            scrollbar-width: thin !important;
            scrollbar-width: 0.213rem;
            scrollbar-color: #464649 transparent;
        }

        /* Works on Chrome, Edge, and Safari */
        *::-webkit-scrollbar {
            width: 12px;
        }
            scrollbar-color: #464649 transparent;

        *::-webkit-scrollbar-track {
            background: transparent;
        }

        *::-webkit-scrollbar-thumb {
            background-color: #464649;
            border-radius: 1.5rem;
        }
        
    }

    button, input, textarea {
        border: none;
        outline: none;
        box-shadow: none;
        width: 100%;
        font-size: 1rem;
    }
`;

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
`;
export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export default globalStyles;
