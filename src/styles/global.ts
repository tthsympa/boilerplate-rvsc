import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --max-width: 1100px;
    --border-radius: 12px;
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    -ms-overflow-style: none !important;
    scrollbar-width: none !important;
  }

  *::-webkit-scrollbar {
    display: none !important;
  }

  html,
  body {
    max-width: 100vw;
    font-family: 'Inter';
    font-size: 50%;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  b,
  strong {
    font-weight: 600;
  }

  button {
    border: none;
  }
  
  input {
    border: none;
  }

  input:focus,
  textarea:focus {
    outline: none;
  }

  input::placeholder {
    color: currentColor;
    opacity: 0.5;
  }
`
