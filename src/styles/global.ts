import { createGlobalStyle } from 'styled-components'
import '@fontsource/poppins'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  body {
    font-family: "Poppins", sans-serif;
    font-weight: 300;
    font-style: normal;
    background-color: ${({ theme }) => theme.background};
  }

  body::-webkit-scrollbar {
    width: 8px;
  }

  body::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.text};
    border-radius: 4px;
  }

  body::-webkit-scrollbar-track {
    background: transparent;
    border-radius: 4px;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }
    @media (max-width: 720px) {
      font-size: 87.75%;
    }
  }
`
