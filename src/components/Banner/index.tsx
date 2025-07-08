import { Link } from 'react-router-dom'
import { Imagem, Titulo, Content } from './styles'
import bannerImg from '../../assets/images/Vector.png'
import logo from '../../assets/images/logo.png'

const Banner = () => (
  <Imagem style={{ backgroundImage: `url(${bannerImg})` }}>
    <div className="container">
      <Content>
        <Link to="/">
          <img src={logo} alt="Efood Logo" />
        </Link>
        <Titulo>
          Viva experiências gastronômicas <br />
          no conforto da sua casa
        </Titulo>
      </Content>
    </div>
  </Imagem>
)

export default Banner
