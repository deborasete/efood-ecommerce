import Banner from '../../components/Banner'
import ProductList from '../../components/ProductsList'
import Food from '../../models/Food'
import sushi from '../../assets/images/hioki_sushi.png'
import trattoria from '../../assets/images/trattoria.png'

const promocoes: Food[] = [
  {
    id: 1,
    category: 'Saiba Mais',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    title: 'Hioki Sushi',
    score: 4.9,
    infos: ['Destaque da semana', 'Japonesa'],
    image: sushi
  },
  {
    id: 2,
    category: 'Saiba Mais',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    title: 'La Dolce Vita Trattoria',
    score: 4.6,
    infos: ['Italiana'],
    image: trattoria
  },
  {
    id: 3,
    category: 'Saiba Mais',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    title: 'La Dolce Vita Trattoria',
    score: 4.6,
    infos: ['Italiana'],
    image: trattoria
  },
  {
    id: 4,
    category: 'Saiba Mais',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    title: 'Hioki Sushi',
    score: 4.9,
    infos: ['Destaque da semana', 'Japonesa'],
    image: sushi
  },
  {
    id: 5,
    category: 'Saiba Mais',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    title: 'Hioki Sushi',
    score: 4.9,
    infos: ['Destaque da semana', 'Japonesa'],
    image: sushi
  },
  {
    id: 6,
    category: 'Saiba Mais',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    title: 'La Dolce Vita Trattoria',
    score: 4.6,
    infos: ['Italiana'],
    image: trattoria
  }
]

const Home = () => (
  <>
    <Banner />
    <ProductList foods={promocoes} background="lighterPink" />
  </>
)

export default Home
