import bannerCategories from '../../assets/images/bannerCategories.png'
import { ImagemBanner } from './styles'

const PerfilBanner = () => (
  <ImagemBanner
    style={{ backgroundImage: `url(${bannerCategories})` }}
  ></ImagemBanner>
)

export default PerfilBanner
