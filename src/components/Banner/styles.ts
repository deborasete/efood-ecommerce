import styled from 'styled-components'

export const Imagem = styled.div`
  width: 100%;
  height: 560px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  font-weight: bold;

  .container {
    position: relative;
    padding-top: 64px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
  }
`

export const Titulo = styled.h2`
  font-size: 36px;
  max-width: 539px;
  text-align: center;
  margin-top: 170px;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
