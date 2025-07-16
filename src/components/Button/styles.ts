import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { cores } from '../../styles'

interface ButtonProps {
  variant?: 'default' | 'category'
}

export const ButtonContainer = styled.button<ButtonProps>`
  background-color: ${(props) =>
    props.variant === 'category' ? cores.lightPink : cores.darkPink};
  color: ${(props) =>
    props.variant === 'category' ? cores.darkPink : cores.lightPink};
  border: ${(props) =>
    props.variant === 'category' ? 'none' : `2px solid ${cores.darkPink}`};

  font-size: 14px;
  font-weight: bold;
  padding: 4px;
  cursor: pointer;
  text-align: center;
  height: 24px;
  margin-top: 8px;

  display: ${(props) =>
    props.variant === 'category' ? 'block' : 'inline-block'};
  width: ${(props) => (props.variant === 'category' ? '100%' : 'auto')};
  max-width: ${(props) => (props.variant === 'category' ? '304px' : 'none')};
  align-self: ${(props) =>
    props.variant === 'category' ? 'center' : 'flex-start'};
`

export const ButtonLink = styled(Link)<ButtonProps>`
  font-size: ${(props) => (props.variant === 'category' ? '16px' : '14px')};
  background-color: ${(props) =>
    props.variant === 'category' ? cores.lightPink : cores.darkPink};
  color: ${(props) =>
    props.variant === 'category' ? cores.darkPink : cores.lightPink};
  border: ${(props) =>
    props.variant === 'category' ? 'none' : `2px solid ${cores.darkPink}`};

  font-weight: bold;
  text-decoration: none;
  height: auto;
  padding: 4px 6px;

  width: ${(props) => (props.variant === 'category' ? '100%' : 'auto')};
  max-width: ${(props) => (props.variant === 'category' ? '304px' : 'none')};
  align-self: ${(props) =>
    props.variant === 'category' ? 'center' : 'flex-start'};
`
