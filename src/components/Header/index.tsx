import {
  HeaderBar,
  ContainerHeader,
  Links,
  LinkItem,
  StyledLink,
  LogoLink,
  LinkCart
} from './styles'
import logo from '../../assets/images/logo.png'
// import carrinho from '../../assets/images/carrinho.svg'

const Header = () => (
  <HeaderBar>
    <ContainerHeader>
      <nav>
        <Links>
          <LinkItem>
            <StyledLink to="/perfil">Restaurantes</StyledLink>
          </LinkItem>
        </Links>
      </nav>
      <LogoLink to="/">
        <img src={logo} alt="Efood Logo" />
      </LogoLink>
      <LinkCart href="#">0 produto(s) no carrinho</LinkCart>
    </ContainerHeader>
  </HeaderBar>
)

export default Header
