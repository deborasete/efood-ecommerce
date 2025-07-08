import { Link } from 'react-router-dom'
import { HeaderBar, LinkCart, LinkItem, Links } from './styles'
import carrinho from '../../assets/images/carrinho.svg'

const Header = () => (
  <HeaderBar>
    <div>
      <Link to="/">Home</Link>
      <nav>
        <Links>
          <LinkItem>
            <Link to="/perfil">Perfil Restaurante</Link>
          </LinkItem>
        </Links>
      </nav>
    </div>
    <LinkCart href="#">
      0 - produto(s)
      <img src={carrinho} alt="Carrinho de compras" />
    </LinkCart>
  </HeaderBar>
)

export default Header
