import { ButtonContainer, ButtonLink } from './styles'

type Props = {
  type: 'button' | 'link' | 'submit'
  variant?: 'default' | 'category'
  title: string
  to?: string
  onClick?: () => void
  children?: string
}

const Button = ({
  type,
  variant = 'default',
  title,
  to,
  onClick,
  children
}: Props) => {
  if (type === 'button') {
    return (
      <ButtonContainer
        variant={variant}
        type={type}
        title={title}
        onClick={onClick}
      >
        {children}
      </ButtonContainer>
    )
  }
  return (
    <ButtonLink variant={variant} to={to as string} title={title}>
      {children}
    </ButtonLink>
  )
}

export default Button
