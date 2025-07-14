import Food from '../../models/Food'
import CategoryProduct from '../../components/ProductCard'
import { ListA } from './styles'
import { Container } from './styles'

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
            <CategoryProduct
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
