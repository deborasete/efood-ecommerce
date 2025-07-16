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
  onAddToCart?: () => void
  id?: number
  size?: 'default' | 'category'
  buttonVariant?: 'default' | 'category'
}

const ProductCard = ({
  title,
  category,
  description,
  infos,
  image,
  score,
  variant = 'default',
  size,
  buttonVariant,
  onAddToCart,
  id
}: Props) => {
  const isSaibaMais = category === 'Saiba Mais'
  return (
    <Card variant={variant} size={size}>
      <Link to={isSaibaMais && id ? `/perfil/${id}` : '#'}>
        <img src={image} alt={title} />
      </Link>
      <ContentWrapper variant={variant} size={size}>
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
        {isSaibaMais && id ? (
          <Button
            type="link"
            title={category}
            to={`/perfil/${id}`}
            variant={buttonVariant || 'category'}
            onClick={onAddToCart}
          >
            {category}
          </Button>
        ) : (
          <Button
            type="button"
            title={category}
            variant="category"
            onClick={onAddToCart}
          >
            {category}
          </Button>
        )}
      </ContentWrapper>
    </Card>
  )
}

export default ProductCard
