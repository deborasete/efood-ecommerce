import { useSelector, useDispatch } from 'react-redux'
import { RootReducer } from '../../store'
import Logo from '../Logo'
import {
  HeaderBar,
  ContainerHeader,
  StyledLink,
  LogoLink,
  LinkCart
} from './styles'
import { open } from '../../store/reducers/cart'

const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }
  return (
    <HeaderBar>
      <ContainerHeader>
        <StyledLink to="/">Restaurantes</StyledLink>
        <LogoLink to="/">
          <Logo />
        </LogoLink>
        <LinkCart
          to="/carrinho"
          onClick={(e) => {
            e.preventDefault()
            openCart()
          }}
        >
          {items.length} produto(s) no carrinho
        </LinkCart>
      </ContainerHeader>
    </HeaderBar>
  )
}

export default Header
