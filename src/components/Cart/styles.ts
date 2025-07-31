import styled from 'styled-components'
import { cores } from '../../styles'
import trash from '../../assets/images/trash.png'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.8;
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
  padding: 32px 8px 16px 8px;
  max-width: 360px;
  width: 100%;
`

export const CartItem = styled.li`
  display: flex;
  background-color: ${cores.lightPink};
  height: 100px;
  position: relative;
  align-items: flex-start;
  padding: 8px;
  margin-bottom: 16px;

  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
    margin-right: 8px;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  h4 {
    margin: 0;
    color: ${cores.darkPink};
    font-weight: bold;
    font-size: 18px;
    margin-bottom: 16px;
  }

  span {
    color: ${cores.darkPink};
    font-size: 14px;
  }

  button {
    background-image: url(${trash});
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    position: absolute;
    bottom: 8px;
    right: 8px;
    cursor: pointer;
  }
`

export const Footer = styled.footer`
  margin-top: auto;
  padding-top: 24px;
  display: flex;
  flex-direction: column;
  font-size: 14px;
  color: ${cores.lightPink};

  .total {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: bold;
  }

  button {
    font-size: 14px;
    background-color: ${cores.lightPink};
    color: ${cores.darkPink};
    margin-top: 16px;
    padding: 4px;
    border: none;
    font-weight: bold;
    cursor: pointer;
  }
`

export const ButtonCart = styled.button`
  font-size: 14px;
  background-color: ${cores.lightPink};
  color: ${cores.darkPink};
  margin-top: 16px;
  padding: 4px;
  border: none;
  font-weight: bold;
  cursor: pointer;
`
export const EmptyText = styled.p`
  color: ${cores.lightPink};
  font-size: 14px;
  text-align: center;
  margin-top: 8px;
  line-height: 22px;
  font-weight: bold;
`
