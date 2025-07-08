import Tag from '../../../../components/Tag'
import { CardA, Descricao, Titulo, TituloWrapper } from './styles'

type Props = {
  title: string
  category: string
  description: string
  infos: string[]
  image: string
  score?: number
}

const ProductA = ({ title, category, description, image }: Props) => (
  <CardA>
    <img src={image} alt={title} />
    <TituloWrapper>
      <Titulo>{title}</Titulo>
    </TituloWrapper>
    <Descricao>{description}</Descricao>
    <Tag>{category}</Tag>
  </CardA>
)

export default ProductA
