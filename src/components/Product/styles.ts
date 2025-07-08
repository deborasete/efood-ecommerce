import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Card = styled.div`
  background-color: ${cores.white};
  border-radius: 8px;
  padding: 8px;
  position: relative;
  border: 1px solid ${cores.darkPink};

  ${TagContainer} {
    margin-right: 2px;
    font-size: 14px;
    border-radius: 0;
    background-color: ${cores.darkPink};
    color: ${cores.lightPink};
  }
`

export const Titulo = styled.h3`
  font-weight: bold;
  font-size: 18px;
  line-height: 1;
  margin: 0;
  padding: 0;
`

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin-top: 16px;
  margin-bottom: 16px;
  height: 100px;
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`

export const TituloWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
  margin-bottom: 8px;
  font-weight: bold;
  font-size: 18px;

  .score {
    display: flex;
    align-items: center;
    gap: 4px;
    font-size: 16px;
    font-weight: bold;

    img {
      width: 16px;
      height: 16px;
      margin-bottom: 1px;
    }
  }
`
