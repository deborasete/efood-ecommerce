import { Link as RouterLink } from 'react-router-dom'
import { Container, FooterSection, Link, Links } from './styles'
import logo from '../../assets/images/logo.png'
import instagram from '../../assets/images/instagram.png'
import facebook from '../../assets/images/facebook.png'
import twitter from '../../assets/images/twitter.png'

const Footer = () => (
  <Container>
    <div className="container">
      <FooterSection>
        <RouterLink
          to="/"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <img src={logo} alt="Efood" />
        </RouterLink>
        <Links>
          <li>
            <Link href="#">
              <img src={instagram} alt="Instagram" />
            </Link>
          </li>
          <li>
            <Link href="#">
              <img src={facebook} alt="Facebook" />
            </Link>
          </li>
          <li>
            <Link href="#">
              <img src={twitter} alt="Twitter" />
            </Link>
          </li>
        </Links>
      </FooterSection>
      <p>
        A efood é uma plataforma para divulgação de estabelecimentos. A
        responsabilidade pela entrega e qualidade <br />
        dos produtos é toda do estabelecimento contratado.
      </p>
    </div>
  </Container>
)

export default Footer
