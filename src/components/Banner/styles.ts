import styled from 'styled-components'

export const Imagem = styled.div`
  width: 100%;
  height: 384px;
  background-repeat: no-repeat;
  background-size: cover;

  .container {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: flex-end;
  }

  @media (max-width: 1024px) {
    height: 300px;
  }

  @media (max-width: 768px) {
    height: 220px;
    width: 100%;
  }
`

export const Titulo = styled.h2`
  font-size: 36px;
  font-weight: bold;
  margin-top: 138.5px;
  margin-bottom: 40px;
  text-align: center;

  @media (max-width: 1024px) {
    font-size: 28px;
    margin-top: 64px;
    margin-bottom: 30px;
  }

  @media (max-width: 768px) {
    font-size: 20px;
    margin-top: 30px;
    margin-bottom: 20px;
    padding: 0 10px;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 64px;

  @media (max-width: 1024px) {
    margin-top: 40px;
  }

  @media (max-width: 768px) {
    margin-top: 40px;
  }
`
