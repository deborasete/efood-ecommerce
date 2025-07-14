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
import Button from '../Button'

type Props = {
  title: string
  category: string
  description: string
  infos: string[]
  image: string
  score?: number
  variant?: 'default' | 'category'
}

const ProductCard = ({
  title,
  category,
  description,
  infos,
  image,
  score,
  variant = 'default'
}: Props) => (
  <Card variant={variant}>
    <Link to="/perfil">
      <img src={image} alt={title} />
    </Link>
    <ContentWrapper variant={variant}>
      {variant !== 'category' && (
        <Infos>
          {infos.map((info) => (
            <Tag key={info} size="small">
              {info}
            </Tag>
          ))}
        </Infos>
      )}
      <TituloWrapper>
        <Titulo variant={variant}>{title}</Titulo>
        {score !== undefined && (
          <div className="score">
            <span>{score.toFixed(1)}</span>
            <img src={estrela} alt="Estrela" />
          </div>
        )}
      </TituloWrapper>
      <Descricao>{description}</Descricao>
      {category === 'Adicionar ao carrinho' ? (
        <Button
          type="button"
          title={category}
          variant="category"
          onClick={() => alert('Adicionado ao carrinho')}
        >
          {category}
        </Button>
      ) : (
        <Button type="link" title={category} to="/perfil" variant="default">
          {category}
        </Button>
      )}
    </ContentWrapper>
  </Card>
)

export default ProductCard
