import styled from 'styled-components'
import { cores } from '../../styles'

import { Props } from './index'

export const TagContainer = styled.div<Props>`
  background-color: ${cores.darkPink};
  color: ${cores.lightPink};
  font-size: ${(props) => (props.size === 'big' ? '13px' : '12px')};
  font-weight: bold;
  padding: ${(props) => (props.size === 'big' ? '8px 6px' : '4px 6px')};
  border-radius: 8px;
  display: inline-block;
  cursor: pointer;
`
