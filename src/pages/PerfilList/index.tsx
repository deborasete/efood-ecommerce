import Food from '../../models/Food'
import { ListA } from './styles'
import { Container } from './styles'
import ProductCard from '../../components/ProductCard'

export type Props = {
  title: string
  foods: Food[]
}

const Category = ({ title, foods }: Props) => (
  <Container>
    <div className="container">
      <h2>{title}</h2>
      <ListA>
        {foods.map((food) => (
          <li key={food.id}>
            <ProductCard
              variant="category"
              category={food.category}
              description={food.description}
              image={food.image}
              infos={food.infos || []}
              title={food.title}
              score={food.score}
            />
          </li>
        ))}
      </ListA>
    </div>
  </Container>
)

export default Category
