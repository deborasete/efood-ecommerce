import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.footer`
  background-color: ${cores.lightPink};
  padding: 32px 0;
  font-size: 14px;

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    font-size: 10px;
  }

  p {
    margin-top: 40px;
  }

  @media (max-width: 768px) {
    .container {
      font-size: 8px;
    }
  }
`

export const Links = styled.ul`
  display: flex;
  margin-top: 16px;

  @media (max-width: 1024px) {
    margin-top: 10px;
  }
`

export const Link = styled.a`
  color: ${cores.darkPink};
  text-decoration: none;
  margin-right: 8px;
`

export const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 32px;

  img {
    margin-bottom: 16px;
  }

  @media (max-width: 1024px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 0;

    img {
      margin-bottom: 0;
    }
  }
`
