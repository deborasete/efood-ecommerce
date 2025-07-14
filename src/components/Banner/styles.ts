import styled from 'styled-components'

export const Imagem = styled.div`
  width: 100%;
  height: 360px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  font-weight: bold;
  top: 0;
  margin-top: 0;

  .container {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: flex-end;
  }
`

export const Titulo = styled.h2`
  font-size: 36px;
  max-width: 539px;
  text-align: center;
  margin-top: 138.5px;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
`
