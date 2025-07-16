import Logo from '../Logo'
import {
  HeaderBar,
  ContainerHeader,
  StyledLink,
  LogoLink,
  LinkCart
} from './styles'

const Header = () => (
  <HeaderBar>
    <ContainerHeader>
      <StyledLink to="/">Restaurantes</StyledLink>

      <LogoLink to="/">
        <Logo />
      </LogoLink>

      <LinkCart href="#">0 produto(s) no carrinho</LinkCart>
    </ContainerHeader>
  </HeaderBar>
)

export default Header
