import Food from '../../models/Food'
import { ListA } from './styles'
import { Container } from './styles'
import ProductCard from '../ProductCard'

export type Props = {
  title: string
  foods: Food[]
  onAddToCart: (product: Food) => void
}

const PerfilList = ({ foods, title, onAddToCart }: Props) => (
  <Container>
    <div className="container">
      <ListA>
        {foods.map((food) => (
          <ProductCard
            key={food.id}
            title={food.title}
            description={food.description}
            category={food.category}
            image={food.image}
            infos={food.infos || []}
            variant="category"
            onAddToCart={() => onAddToCart(food)}
          />
        ))}
      </ListA>
    </div>
  </Container>
)

export default PerfilList
