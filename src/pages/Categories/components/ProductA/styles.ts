import styled from 'styled-components'
import { cores } from '../../../../styles'
import { TagContainer } from '../../../../components/Tag/styles'

export const CardA = styled.div`
  background-color: ${cores.darkPink};
  border-radius: 8px;
  padding: 8px;
  position: relative;
  border: 1px solid ${cores.darkPink};
  color: ${cores.lightPink};
  margin-bottom: 32px;

  img {
    width: 100%;
    height: auto;
    display: block;
  }

  ${TagContainer} {
    margin-right: 8px;
    font-size: 14px;
    border-radius: 0;
    background-color: ${cores.lightPink};
    color: ${cores.darkPink};
    width: 100%;
    display: flex;
    justify-content: center;
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
  height: 100px;
`

export const TituloWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
  margin-bottom: 8px;
  font-weight: bold;
  font-size: 18px;
`
