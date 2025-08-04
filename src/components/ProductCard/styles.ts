import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'

interface CardProps {
  variant?: 'default' | 'category'
  size?: 'default' | 'category'
}

export const Card = styled.div<CardProps>`
  background-color: ${(props) =>
    props.variant === 'category' ? cores.darkPink : cores.white};
  position: relative;
  width: 100%;
  max-width: ${(props) => (props.size === 'category' ? '320px' : '100%')};
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  img {
    width: ${(props) => (props.size === 'category' ? '100%' : '472px')};
    height: ${(props) => (props.size === 'category' ? '167px' : '217px')};
    object-fit: cover;
    padding: ${(props) => (props.size === 'category' ? '8px' : '0')};
    display: block;
    width: 100%;
  }

  @media (max-width: 768px) {
    padding: 0px 8px;
    img {
      width: 100%;
    }
  }
`

export const ContentWrapper = styled.div<CardProps>`
  border-left: ${(props) =>
    props.variant === 'category' ? 'none' : `1px solid ${cores.darkPink}`};
  border-right: ${(props) =>
    props.variant === 'category' ? 'none' : `1px solid ${cores.darkPink}`};
  border-bottom: ${(props) =>
    props.variant === 'category' ? 'none' : `1px solid ${cores.darkPink}`};
  background-color: ${(props) =>
    props.variant === 'category' ? cores.darkPink : 'transparent'};
  padding: 8px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: flex-start;

  button {
    margin-top: auto;
  }

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

  @media (max-width: 768px) {
    padding: 12px;
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
  word-break: break-word;
  white-space: normal;

  @media (max-width: 768px) {
    font-size: 13px;
    line-height: 20px;
  }
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  gap: 8px;

  @media (max-width: 768px) {
    top: 8px;
    right: 8px;
    gap: 6px;
  }
`

export const TituloWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;

    .score {
      font-size: 16px;

      img {
        width: 18px;
        height: 18px;
      }
    }
  }
`
