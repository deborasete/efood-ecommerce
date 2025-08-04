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

  @media (max-width: 1024px) {
    height: 140px;
    padding-top: 48px;
  }

  @media (max-width: 768px) {
    height: 120px;
    padding-top: 15px;
  }
`

export const ContainerHeader = styled.div`
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  @media (max-width: 1024px) {
    padding: 0 10px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
  }
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

  @media (max-width: 1024px) {
    font-size: 16px;
  }

  @media (max-width: 768px) {
    position: static;
    font-size: 12px;
    text-align: center;
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

  @media (max-width: 1024px) {
    font-size: 12px;
    min-width: 120px;
  }

  @media (max-width: 768px) {
    position: static;
    min-width: auto;
    font-size: 12px;
    justify-content: center;
    text-align: center;
  }
`

export const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1024px) {
    width: 100px;
  }

  @media (max-width: 768x) {
    width: 80px;
    height: 37px;
  }
`
