import styled from 'styled-components'
import { cores } from '../../styles'

import { Props } from './index'

export const TagContainer = styled.div<Props>`
  background-color: ${cores.darkPink};
  color: ${cores.lightPink};
  font-size: ${(props) => (props.size === 'big' ? '14px' : '12px')};
  font-weight: bold;
  padding: ${(props) => (props.size === 'big' ? '4px 6px' : '4px 4px')};
  display: inline-block;
  cursor: pointer;
`
