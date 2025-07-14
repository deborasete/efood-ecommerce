import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Card = styled.div`
  background-color: ${cores.white};
  position: relative;

  img {
    width: 100%;
    height: 217px;
    object-fit: cover;
    padding: 0;
    display: block;
  }
`

export const ContentWrapper = styled.div`
  border: 1px solid ${cores.darkPink};
  border-top: none;
  padding: 8px;

  ${TagContainer} {
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
`

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin-top: 16px;
  margin-left: 8px;
  margin-bottom: 8px;
  height: 100px;
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  gap: 8px;
`

export const TituloWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
  margin-bottom: 8px;
  font-weight: bold;
  font-size: 18px;
  margin: 7px 7px;

  .score {
    display: flex;
    align-items: center;
    gap: 4px;
    font-size: 18px;
    font-weight: bold;

    img {
      width: 21px;
      height: 20px;
      margin-bottom: 1px;
      margin-left: 5px;
      margin-right: 0.5px;
    }
  }
`
