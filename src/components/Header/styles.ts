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
  height: 186px;
  display: flex;
  align-items: flex-start;
  padding-top: 64px;
`

export const ContainerHeader = styled.div`
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`

export const StyledLink = styled(Link)`
  position: absolute;
  left: 0;
  color: ${cores.darkPink};
  font-weight: bold;
  text-decoration: none;
  font-size: 18px;

  &:hover {
    text-decoration: underline;
  }
`

export const LinkCart = styled(Link)`
  position: absolute;
  right: 0;
  display: flex;
  color: ${cores.darkPink};
  font-weight: bold;
  text-decoration: none;
  font-size: 18px;
`

export const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
`
