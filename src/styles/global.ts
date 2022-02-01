import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    :root {
        --turquoise: #8ad4c7;
    }

    * {
        margin: 0;
        padding: 0;
        overflow-x: hidden;
        box-sizing: border-box;
    }

    body {
        background: #f8f8f8;
    }

    button, a {
        cursor: pointer;
        background: none;
    }
`;
