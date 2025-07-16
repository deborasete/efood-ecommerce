import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ProductCard from '../../components/ProductCard'
import { Container, List } from '../../components/ProductsList/styles'
import Banner from '../../components/Banner'

type Restaurante = {
  id: number
  titulo: string
  tipo: string
  descricao: string
  capa: string
  avaliacao: number
}

const Home = () => {
  const [restaurantes, setRestaurantes] = useState<Restaurante[]>([])
  const navigate = useNavigate()

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((data) => setRestaurantes(data))
  }, [])

  return (
    <>
      <Banner />
      <Container>
        <div className="container">
          <List>
            {restaurantes.map((restaurante) => (
              <li key={restaurante.id}>
                <ProductCard
                  id={restaurante.id}
                  title={restaurante.titulo}
                  description={restaurante.descricao}
                  image={restaurante.capa}
                  infos={[restaurante.tipo]}
                  score={restaurante.avaliacao}
                  category="Saiba Mais"
                  variant="default"
                  buttonVariant="default"
                  size="default"
                />
              </li>
            ))}
          </List>
        </div>
      </Container>
    </>
  )
}

export default Home
