import styled from 'styled-components'
import { cores } from '../../styles'

export const Title = styled.h2`
  font-size: 16px;
  font-weight: bold;
  color: ${cores.lightPink};
  margin-bottom: 16px;
`

export const Text = styled.p`
  font-size: 14px;
  line-height: 22px;
  color: ${cores.lightPink};
`

export const ConfirmButton = styled.button`
  margin-top: 24px;
  padding: 4px;
  background-color: ${cores.lightPink};
  color: ${cores.darkPink};
  border: none;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  width: 100%;

  &:hover {
    background-color: ${cores.lighterPink};
  }
`
