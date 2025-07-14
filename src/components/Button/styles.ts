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
  padding: 4px 6px;
  cursor: pointer;
  display: block;
  text-align: center;
  width: 100%;
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
  display: inline-block;
  padding: 4px 6px;
`
