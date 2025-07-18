import { useLocation } from 'react-router-dom'

import { GlobalCss } from './styles'
import Header from './components/Header'
import Footer from './components/Footer'
import Rotas from './routes'

function App() {
  const location = useLocation()

  const isHome = location.pathname === '/'

  return (
    <>
      <GlobalCss />
      {!isHome && <Header />}
      <div className="container"></div>
      <Rotas />
      <Footer />
    </>
  )
}

export default App
