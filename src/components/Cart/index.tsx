import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { remove, close } from '../../store/reducers/cart'
import { CartContainer, Sidebar, CartItem, Footer, Overlay } from './styles'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const getTotalPrice = () => {
    return items.reduce((acc, item) => acc + (item.price ?? 0), 0)
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <ul>
          {items.map((item) => (
            <CartItem key={item.id}>
              <img src={item.image} alt={item.title} />
              <div>
                <h4>{item.title}</h4>
                <span>R$ {item.price?.toFixed(2)}</span>
              </div>
              <button onClick={() => removeItem(item.id)} type="button" />
            </CartItem>
          ))}
        </ul>
        <Footer>
          <span>Valor total</span>
          <strong>R$ {getTotalPrice().toFixed(2)}</strong>
          <button>Continuar com a entrega</button>
        </Footer>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
