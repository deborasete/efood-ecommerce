import styled from 'styled-components'
import { cores } from '../../styles'

interface InputProps {
  hasError?: boolean
}

export const Title = styled.h3`
  font-size: 16px;
  font-weight: bold;
  color: ${cores.lightPink};
  margin-bottom: 16px;
`

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  color: ${cores.lightPink};
  font-size: 14px;
  font-weight: bold;
`

export const Input = styled.input<InputProps>`
  padding: 8px;
  margin-top: 8px;
  margin-bottom: 8px;
  border: none;
  background-color: ${cores.lightPink};
  font-size: 14px;
  font-weight: bold;
  height: 32px;
  box-sizing: border-box;
  width: 100%;
  border: ${({ hasError }) => (hasError ? '2px solid yellow' : 'none')};

  &.fixed-input {
    width: 155px;
  }
`

export const DoubleInput = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 34px;

  ${Input} {
    width: 100%;
  }
`

export const FormButtons = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 8px;

  button:first-child {
    margin-top: 16px;
  }
`

export const ButtonForm = styled.button`
  font-size: 14px;
  background-color: ${cores.lightPink};
  color: ${cores.darkPink};
  margin-top: 8px;
  padding: 4px;
  border: none;
  font-weight: bold;
  cursor: pointer;
`
