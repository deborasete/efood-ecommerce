import { Link } from 'react-router-dom'
import { TagContainer } from './styles'

export type Props = {
  size?: 'small' | 'big'
  children: string
}

const Tag = ({ children, size = 'small' }: Props) => (
  <Link to="/perfil">
    <TagContainer size={size}>{children}</TagContainer>
  </Link>
)

export default Tag
