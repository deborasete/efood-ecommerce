import styled from 'styled-components'
import { cores } from '../../styles'

export const HeaderBar = styled.header`
  background-color: ${cores.lightPink};
  padding: 24px;
  border-radius: 16px;
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    color: ${cores.darkPink};
    text-decoration: none;
    font-weight: bold;
  }

  div {
    display: flex;
    align-items: center;
  }
`

export const Links = styled.ul`
  display: flex;
  margin-left: 40px;
`

export const LinkItem = styled.li`
  margin-right: 16px;
`

export const LinkCart = styled.a`
  display: flex;

  img {
    margin-left: 16px;
    width: 20px;
    height: 32;
  }
`
