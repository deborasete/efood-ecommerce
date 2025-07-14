import Food from '../../models/Food'
import ProductCard from '../ProductCard'
import { Container, List } from './styles'

export type Props = {
  background: 'lighterPink'
  foods: Food[]
}

const ProductList = ({ foods }: Props) => (
  <Container>
    <div className="container">
      <List>
        {foods.map((food) => (
          <ProductCard
            key={food.id}
            category={food.category}
            description={food.description}
            image={food.image}
            infos={food.infos || []}
            title={food.title}
            score={food.score}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default ProductList
