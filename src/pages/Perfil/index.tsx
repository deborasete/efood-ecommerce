import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Food from '../../models/Food'
import PerfilBanner from '../../components/PerfilBanner'
import ProductModal from '../../components/ProductModal'
import PerfilList from '../../components/PerfilList'

type Plate = {
  id: number
  nome: string
  descricao: string
  foto: string
  preco: number
  porcao: string
}

type RestauratApi = {
  titulo: string
  capa: string
  cardapio: Plate[]
}

type RestaurantConverted = {
  titulo: string
  capa: string
  cardapio: Food[]
}

const Perfil = () => {
  const { id } = useParams()
  const [restaurante, setRestaurante] = useState<RestaurantConverted | null>(
    null
  )
  const [modalProduto, setModalProduto] = useState<Food | null>(null)

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res: RestauratApi) => {
        const cardapioConvertido: Food[] = res.cardapio.map((item: Plate) => {
          return new Food(
            item.id,
            'Adicionar ao carrinho',
            item.descricao,
            item.foto,
            [],
            item.nome,
            0,
            item.preco,
            item.porcao
          )
        })
        setRestaurante({
          ...res,
          cardapio: cardapioConvertido
        })
      })
  }, [id])

  if (!restaurante) return <h3>Carregando...</h3>

  return (
    <>
      <PerfilBanner image={restaurante.capa} />
      <PerfilList
        foods={restaurante.cardapio}
        title={restaurante.titulo}
        onAddToCart={(produto) => setModalProduto(produto)}
      />
      <ProductModal
        product={modalProduto}
        isOpen={modalProduto !== null}
        onClose={() => setModalProduto(null)}
      />
    </>
  )
}

export default Perfil
