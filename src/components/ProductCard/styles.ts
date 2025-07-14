import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'

interface CardProps {
  variant?: 'default' | 'category'
}

export const Card = styled.div<CardProps>`
  background-color: ${(props) =>
    props.variant === 'category' ? cores.darkPink : cores.white};
  position: relative;
  width: 100%;

  img {
    width: 100%;
    height: 217px;
    object-fit: cover;
    padding: 0;
    display: block;
    padding: ${(props) => (props.variant === 'category' ? '8px' : '0')};
  }
`

export const ContentWrapper = styled.div<CardProps>`
  border: ${(props) =>
    props.variant === 'category' ? 'none' : `1px solid ${cores.darkPink}`};
  background-color: ${(props) =>
    props.variant === 'category' ? cores.darkPink : 'transparent'};
  padding: 8px;

  ${TagContainer} {
    border-radius: 0;
    background-color: ${cores.darkPink};
    color: ${cores.lightPink};
  }

  h3,
  p {
    color: ${(props) =>
      props.variant === 'category' ? cores.lightPink : 'inherit'};
  }
`

export const Titulo = styled.h3<CardProps>`
  font-weight: bold;
  font-size: ${(props) => (props.variant === 'category' ? '16px' : '18px')};
  line-height: 1;
  margin: 0;
`

export const Descricao = styled.p<CardProps>`
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin-top: 16px;
  margin-bottom: ${(props) => (props.variant === 'category' ? '0' : '16px')};
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
  margin-bottom: 8px;
  font-weight: bold;
  font-size: 18px;

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
