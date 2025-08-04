import styled from 'styled-components'

export const Container = styled.section`
  padding: 0 170px;
  .container {
    margin-top: 56px;
    margin-bottom: 120px;
  }

  @media (max-width: 1024px) {
    padding: 0 40px;

    .container {
      margin-top: 40px;
      margin-bottom: 80px;
    }
  }

  @media (max-width: 768px) {
    padding: 0 20px;

    .container {
      margin-top: 32px;
      margin-bottom: 60px;
    }
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

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`
