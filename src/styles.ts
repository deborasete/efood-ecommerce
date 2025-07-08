import { createGlobalStyle } from 'styled-components'

export const cores = {
  lightPink: '#FFEBD9',
  darkPink: '#E66767',
  white: '#FFFFFF',
  lighterPink: '#fceeee'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }

  body {
    background-color: ${cores.lighterPink};
    color: ${cores.darkPink};
    padding-top: 40px;
    overflow-x: hidden;
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }
`
