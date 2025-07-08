import { Imagem } from '../../../../components/Banner/styles'
import bannerCategories from '../../../../assets/images/bannerCategories.png'

const CategoryBanner = () => (
  <Imagem style={{ backgroundImage: `url(${bannerCategories})` }}>
    <div className="container"></div>
  </Imagem>
)

export default CategoryBanner
