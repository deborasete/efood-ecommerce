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
`

export const Titulo = styled.h2`
  font-size: 36px;
  font-weight: bold;
  margin-top: 138.5px;
  margin-bottom: 40px;
  text-align: center;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
`
