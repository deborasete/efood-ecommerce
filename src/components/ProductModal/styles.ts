import styled from 'styled-components'
import { cores } from '../../styles'

export const ModalOverlay = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ModalContent = styled.div`
  background-color: ${cores.darkPink};
  padding: 32px;
  color: ${cores.lightPink};
  display: flex;
  max-width: 1024px;
  gap: 24px;
  position: relative;

  img {
    width: 280px;
    height: auto;
    object-fit: cover;
  }

  h2 {
    font-size: 24px;
    margin-bottom: 16px;
  }

  p {
    font-size: 14px;
    line-height: 1.5;
    margin-bottom: 16px;
  }

  span {
    font-size: 12px;
    display: block;
    margin-bottom: 16px;
  }

  button {
    background-color: ${cores.lightPink};
    color: ${cores.darkPink};
    border: none;
    padding: 8px 16px;
    cursor: pointer;
  }
`

export const CloseButton = styled.button`
  position: absolute;
  right: 8px;
  top: 8px;
  background: none;
  color: ${cores.lightPink};
  border: none;
  font-size: 24px;
  cursor: pointer;
`
