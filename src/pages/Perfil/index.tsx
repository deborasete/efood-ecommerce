import Category from '../PerfilList'
import Food from '../../models/Food'
import pizza from '../../assets/images/pizza.png'
import PerfilBanner from '../PerfilBanner'

const opcao: Food[] = [
  {
    id: 1,
    category: 'Adicionar ao carrinho',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    title: 'Pizza Marguerita',
    infos: ['', ''],
    image: pizza
  },
  {
    id: 2,
    category: 'Adicionar ao carrinho',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    title: 'Pizza Marguerita',
    infos: ['', ''],
    image: pizza
  },
  {
    id: 3,
    category: 'Adicionar ao carrinho',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    title: 'Pizza Marguerita',
    infos: ['', ''],
    image: pizza
  },
  {
    id: 4,
    category: 'Adicionar ao carrinho',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    title: 'Pizza Marguerita',
    infos: ['', ''],
    image: pizza
  },
  {
    id: 5,
    category: 'Adicionar ao carrinho',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    title: 'Pizza Marguerita',
    infos: ['', ''],
    image: pizza
  },
  {
    id: 6,
    category: 'Adicionar ao carrinho',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    title: 'Pizza Marguerita',
    infos: ['', ''],
    image: pizza
  }
]

const Perfil = () => (
  <>
    <PerfilBanner />
    <Category foods={opcao} title="" />
  </>
)

export default Perfil
