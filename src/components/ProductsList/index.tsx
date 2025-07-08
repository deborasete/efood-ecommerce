import Food from '../../models/Food'
import Product from '../../components/Product'
import { Container, List } from './styles'

export type Props = {
  title: string
  background: 'lighterPink'
  foods: Food[]
}

const ProductList = ({ title, foods }: Props) => (
  <Container>
    <div className="container">
      <h2>{title}</h2>
      <List>
        {foods.map((food) => (
          <Product
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
