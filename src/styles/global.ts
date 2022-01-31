import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        background: #f8f8f8;
        overflow-x: hidden;
    }

    button, a {
        cursor: pointer;
        background: none;
    }
`;
