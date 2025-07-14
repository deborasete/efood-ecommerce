import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { cores } from '../../styles'
import bannerImg from '../../assets/images/Vector.png'

export const HeaderBar = styled.header`
  background-color: ${cores.lightPink};
  background-image: url(${bannerImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 163px;
  width: 100%;
  display: flex;
  align-items: center;
`
export const ContainerHeader = styled.div`
  width: calc(100% - 342px);
  max-width: 1024px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`

export const Links = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
`
export const LinkItem = styled.li``

export const StyledLink = styled(Link)`
  color: ${cores.darkPink};
  font-weight: bold;
  text-decoration: none;
  font-size: 18px;

  &:hover {
    text-decoration: underline;
  }
`

export const LogoLink = styled(Link)`
  display: block;
  margin-left: 68px;
  margin-bottom: 20px;
`

export const LinkCart = styled.a`
  display: flex;
  color: ${cores.darkPink};
  font-weight: bold;
  text-decoration: none;
  font-size: 16px;
`
