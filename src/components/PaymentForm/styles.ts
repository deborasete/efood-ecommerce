import styled from 'styled-components'
import { cores } from '../../styles'

interface LabelProps {
  flexGrow?: boolean
}

export const Title = styled.h3`
  font-size: 16px;
  font-weight: bold;
  color: ${cores.lightPink};
  margin-bottom: 16px;
`

export const Label = styled.label<LabelProps>`
  display: flex;
  flex-direction: column;
  color: ${cores.lightPink};
  font-size: 14px;
  font-weight: bold;
  ${({ flexGrow }) => flexGrow && 'flex: 1;'}
`

export const Input = styled.input<{ hasError?: boolean }>`
  padding: 8px;
  margin-top: 8px;
  margin-bottom: 8px;
  border: ${({ hasError }) => (hasError ? '2px solid yellow' : 'none')};
  background-color: ${cores.lightPink};
  font-size: 14px;
  font-weight: bold;
  height: 32px;
  box-sizing: border-box;
  width: 100%;

  &.small-input {
    width: 87px;
    padding: 8px;
  }
  &.large-input {
    flex-grow: 1;
    width: auto;
  }
`

export const DoubleInput = styled.div`
  display: flex;
  gap: 30px;

  & > ${Input} {
    flex: 1;
  }
`

export const FormButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 24px;
`

export const ButtonForm = styled.button`
  font-size: 14px;
  background-color: ${cores.lightPink};
  color: ${cores.darkPink};
  padding: 8px;
  border: none;
  font-weight: bold;
  cursor: pointer;
`
