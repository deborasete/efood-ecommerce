import { Link } from 'react-router-dom'
import {
  Card,
  Descricao,
  Titulo,
  Infos,
  TituloWrapper,
  ContentWrapper
} from './styles'
import estrela from '../../assets/images/estrela.png'
import Tag from '../Tag'

type Props = {
  title: string
  category: string
  description: string
  infos: string[]
  image: string
  score?: number
  variant?: 'default' | 'category'
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
    <Link to="/perfil">
      <img src={image} alt={title} />
    </Link>
    <ContentWrapper>
      <Infos>
        {infos.map((info) => (
          <Tag key={info} size="small">
            {info}
          </Tag>
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
      <Tag size="big">{category}</Tag>
    </ContentWrapper>
  </Card>
)

export default Product
