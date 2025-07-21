import { Header } from './styles'

type Props = {
  image?: string
  title: string
  info: string
}

const PerfilBanner = ({ image, title, info }: Props) => (
  <Header style={{ backgroundImage: `url(${image || '/imagens/fundo.png'})` }}>
    <div className="container">
      <div className="overlay">
        <small>{info}</small>
        <h1>{title}</h1>
      </div>
    </div>
  </Header>
)

export default PerfilBanner
