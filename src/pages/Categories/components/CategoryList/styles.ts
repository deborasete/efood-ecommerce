import styled from 'styled-components'

export const Container = styled.section`
  padding: 32px 0;

  .container {
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    padding: 0 16px;
    box-sizing: border-box;
    margin-top: 56px;
    margin-bottom: 120px;
  }
`

export const ListA = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  list-style: none;
  padding: 0;

  li {
    list-style: none;
  }
`
