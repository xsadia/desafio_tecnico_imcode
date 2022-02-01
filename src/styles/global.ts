import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    :root {
        --turquoise: #1ec9ad;
    }

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
