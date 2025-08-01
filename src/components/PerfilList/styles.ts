import styled from 'styled-components'

export const Container = styled.section`
  padding: 0 170px;
  .container {
    margin-top: 56px;
    margin-bottom: 120px;
  }
`

export const ListA = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  list-style: none;
  justify-content: center;

  li {
    height: 100%;
    display: flex;
  }
`
