import { Header, ImagemBanner } from './styles'

type Props = {
  image?: string
}

const PerfilBanner = ({ image }: Props) => (
  <Header>
    <ImagemBanner
      style={{ backgroundImage: `url(${image || '/imagens/fundo.png'})` }}
    />
  </Header>
)

export default PerfilBanner
