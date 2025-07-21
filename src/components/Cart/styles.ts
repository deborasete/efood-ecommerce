import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'
import { ButtonContainer } from '../Button/styles'
import trash from '../../assets/images/trash.png'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`

export const Sidebar = styled.aside`
  background-color: ${cores.darkPink};
  z-index: 1;
  padding: 40px 16px 0 16px;
  max-width: 360px;
  width: 100%;

  ${ButtonContainer} {
    max-width: 100%;
    width: 100%;
  }
`

export const Prices = styled.p`
  font-weight: bold;
  font-size: 14px;
  color: ${cores.lightPink};
  margin-bottom: 24px;

  span {
    display: block;
    font-size: 12px;
    color: ${cores.lightPink};
  }
`

export const CartItem = styled.li`
  display: flex;
  border-bottom: 1px solid ${cores.lightPink};
  padding-bottom: 8px;
  padding: 8px 0;
  position: relative;

  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
    margin-right: 24px;
  }

  h3 {
    color: ${cores.darkPink};
    font-weight: bold;
    font-size: 16px;
  }

  span {
    display: block;
    color: ${cores.darkPink};
    font-weight: bold;
    font-size: 14px;
  }

  ${TagContainer} {
    margin-right: 8px;
    margin-top: 8px;
    margin-bottom: 16px;
  }

  button {
    background-image: url(${trash});
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    position: absolute;
    top: 8px;
    right: 0;
  }
`

export const Footer = styled.footer`
  margin-top: auto;
  padding-top: 16px;
  border-top: 1px solid #fff;
  display: flex;
  flex-direction: column;
  gap: 8px;

  span {
    color: #fff;
    font-size: 14px;
  }

  strong {
    color: #fff;
    font-size: 18px;
  }

  button {
    background-color: #fff;
    color: #e66767;
    padding: 12px;
    border: none;
    border-radius: 8px;
    font-weight: bold;
    cursor: pointer;
  }
`
