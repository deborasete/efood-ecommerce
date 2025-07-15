import { useState, useEffect } from 'react'
import Food from '../../models/Food'
import PerfilBanner from '../../components/PerfilBanner'
import ProductModal from '../../components/ProductModal'
import PerfilList from '../../components/PerfilList'

const Perfil = () => {
  const [foods, setFoods] = useState<Food[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState<Food | null>(null)

  useEffect(() => {
    async function fetchFoods() {
      try {
        const response = await fetch(
          'https://fake-api-tau.vercel.app/api/efood/restaurantes'
        )
        if (!response.ok) {
          throw new Error(`Erro ao buscar dados: ${response.statusText}`)
        }
        const data = await response.json()

        const foodsFromApi: Food[] = []

        data.forEach((restaurant: any) => {
          restaurant.cardapio.forEach((dish: any) => {
            foodsFromApi.push({
              id: dish.id,
              category: restaurant.tipo,
              description: dish.descricao,
              image: dish.foto,
              infos: [dish.porcao],
              title: dish.nome,
              score: restaurant.avaliacao
            })
          })
        })

        setFoods(foodsFromApi)
      } catch (err: any) {
        setError(err.message)
      } finally {
        setIsLoading(false)
      }
    }

    fetchFoods()
  }, [])

  const openModal = (product: Food) => {
    setSelectedProduct(product)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedProduct(null)
  }

  if (isLoading) {
    return <p>Carregando produtos...</p>
  }

  if (error) {
    return <p>Erro: {error}</p>
  }

  return (
    <>
      <PerfilBanner />
      <PerfilList foods={foods} title="" onAddToCart={openModal} />
      <ProductModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </>
  )
}

export default Perfil
