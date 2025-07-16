import Food from '../../models/Food'
import closeIcon from '../../assets/images/close.png'
import {
  ModalOverlay,
  ModalContent,
  CloseButton,
  Title,
  Description,
  Portion,
  AddButton,
  ProductImage
} from './styles'

type Props = {
  product: Food | null
  isOpen: boolean
  onClose: () => void
}

const ProductModal = ({ product, isOpen, onClose }: Props) => {
  if (!isOpen || !product) return null

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <ModalOverlay onClick={handleOverlayClick}>
      <ModalContent>
        <CloseButton onClick={onClose}>
          <img src={closeIcon} alt="Fechar" />
        </CloseButton>
        <ProductImage src={product.image} alt={product.title} />
        <div>
          <Title>{product.title}</Title>
          <Description>{product.description}</Description>
          {product.portion && <Portion>Serve: {product.portion}</Portion>}
          {product.price !== undefined && (
            <AddButton>
              Adicionar ao carrinho - R${' '}
              {product.price.toFixed(2).replace('.', ',')}
            </AddButton>
          )}
        </div>
      </ModalContent>
    </ModalOverlay>
  )
}

export default ProductModal
