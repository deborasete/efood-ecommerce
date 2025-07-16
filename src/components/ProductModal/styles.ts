import styled from 'styled-components'
import { cores } from '../../styles'
import {
  Titulo as CardTitulo,
  Descricao as CardDescricao
} from '../ProductCard/styles'

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
  color: ${cores.lightPink};
  display: flex;
  gap: 24px;
  position: absolute;
  width: 1024px;
  height: 344px;
  padding: 32px;

  box-sizing: border-box;

  img {
    width: 280px;
    height: auto;
    object-fit: cover;
  }
`
export const ProductImage = styled.img`
  width: 280px;
  height: 280px;
  object-fit: cover;
  margin-left: 0;
`
export const CloseButton = styled.button`
  background: transparent;
  border: none;
  padding: 0;
  position: absolute;
  top: 8px;
  right: 8px;
  cursor: pointer;

  img {
    width: 16px;
    height: 16px;
    display: block;
  }
`
export const Title = styled(CardTitulo)`
  font-size: 18px;
  color: ${cores.lightPink};
  margin-bottom: 16px;
`

export const Description = styled(CardDescricao)`
  color: ${cores.lightPink};
`

export const Portion = styled.span`
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin-bottom: 16px;
`

export const AddButton = styled.button`
  background-color: ${cores.lightPink};
  color: ${cores.darkPink};
  border: none;
  padding: 4px;
  width: 218px;
  height: 24px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
`
