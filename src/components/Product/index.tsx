import { Card, Descricao, Titulo, Infos, TituloWrapper } from './styles'
import estrela from '../../assets/images/estrela.png'
import Tag from '../Tag'

type Props = {
  title: string
  category: string
  description: string
  infos: string[]
  image: string
  score?: number
}

const Product = ({
  title,
  category,
  description,
  infos,
  image,
  score
}: Props) => (
  <Card>
    <img src={image} alt={title} />
    <Infos>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </Infos>
    <TituloWrapper>
      <Titulo>{title}</Titulo>
      {score !== undefined && (
        <div className="score">
          <span>{score.toFixed(1)}</span>
          <img src={estrela} alt="Estrela" />
        </div>
      )}
    </TituloWrapper>
    <Descricao>{description}</Descricao>
    <Tag>{category}</Tag>
  </Card>
)

export default Product
