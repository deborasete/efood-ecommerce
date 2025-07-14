import styled from 'styled-components'

export const Container = styled.section`
  .container {
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    margin-top: 56px;
    margin-bottom: 120px;
  }
`

export const ListA = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  list-style: none;
`
