import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Perfil from './pages/Perfil'
import Cart from '../src/components/Cart'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/perfil/:id" element={<Perfil />} />
    <Route path="/carrinho" element={<Cart />} />
    {/* <Route path="/checkout" element={<OrderConfirmed />} /> */}
  </Routes>
)

export default Rotas
