import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    :root {
        --green: #0B5E5C;
        --light-green: #DFF0E6;
        --dark-green: #1E403F;
        --darker-green: #052A2A;
        --water-green: #46A69E;

        --gray: #8BA5A4;
        --gray-green: #B2CFCE;
        --light-water-green: #DFF0EF;

        --secondary-green: #066E50;
        --bright-green: #67C44B;
        --bright-water-green: #23C7B9;
        --google: #EA4335;

        --icon-gradient: linear-gradient(180deg, #0B5E5C 0%, #043433 100%);
        --home-gradient: linear-gradient(180deg, rgba(9, 79, 77, 0.8) 0%, rgba(5, 42, 42, 0.8) 100%);     
    }
    
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body {
    background-color: var(--bright);
    color: var(--darker-green);
    }

    body, input, button, textarea {
        font: 16px 'Montserrat', sans-serif;
    }

    button {
        cursor: pointer;
    }
`;