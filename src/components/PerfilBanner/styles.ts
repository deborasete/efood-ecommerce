import styled from 'styled-components'
import { cores } from '../../styles'

export const Header = styled.header`
  height: 280px;
  width: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  display: flex;
  align-items: flex-end;
  padding-bottom: 32px;
  color: ${cores.white};
  line-height: 100%;

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }

  .overlay {
    display: flex;
    flex-direction: column;
    /* padding-left: 170px; */
    gap: 156.5px;
  }

  small {
    font-weight: 100;
    font-size: 32px;
    padding-top: 24px;
  }

  h1 {
    font-weight: bold;
    font-size: 32px;
    line-height: 100%;
  }
`
