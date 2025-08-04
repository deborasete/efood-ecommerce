import { Link as RouterLink } from 'react-router-dom'
import { Container, FooterSection, Link, Links } from './styles'
import instagram from '../../assets/images/instagram.png'
import facebook from '../../assets/images/facebook.png'
import twitter from '../../assets/images/twitter.png'
import Logo from '../Logo'

const Footer = () => (
  <Container>
    <div className="container">
      <FooterSection>
        <RouterLink
          to="/"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <Logo />
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
