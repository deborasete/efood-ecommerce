import styled from 'styled-components'

export const Container = styled.section`
  padding: 80px 0 120px 0;
  overflow-x: hidden;
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 80px;
  row-gap: 48px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    column-gap: 0;
  }
`
