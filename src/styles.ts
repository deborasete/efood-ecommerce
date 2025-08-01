import { createGlobalStyle } from 'styled-components'

export const cores = {
  lightPink: '#FFEBD9',
  darkPink: '#E66767',
  white: '#FFFFFF',
  lighterPink: '#fceeee',
  lightGray: 'rgb(253, 248, 248)',
  yellow: '#f5e83bff'
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
    background-color: ${cores.lightGray};
    color: ${cores.darkPink};
    overflow-x: hidden;
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }
`
