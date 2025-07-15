import Food from '../../models/Food'
import { ModalOverlay, ModalContent, CloseButton } from './styles'

type Props = {
  product: Food | null
  isOpen: boolean
  onClose: () => void
}

const ProductModal = ({ product, isOpen, onClose }: Props) => {
  if (!isOpen || !product) return null

  return (
    <ModalOverlay>
      <ModalContent>
        <CloseButton onClick={onClose}>×</CloseButton>
        <img src={product.image} alt={product.title} />
        <div>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <span>Serve: de 2 a 3 pessoas</span>
          <button>Adicionar ao carrinho - R$ 60,90</button>
        </div>
      </ModalContent>
    </ModalOverlay>
  )
}

export default ProductModal
