import { ButtonContainerA, ButtonLinkA } from '../Button/styles'

type Props = {
  type: 'button' | 'link'
  title: string
  to?: string
  onClick?: () => void
  children?: string
}

const ButtonA = ({ type, title, to, onClick, children }: Props) => {
  if (type === 'button') {
    return (
      <ButtonContainerA type="button" title={title} onClick={onClick}>
        {children}
      </ButtonContainerA>
    )
  }
  return (
    <ButtonLinkA to={to as string} title={title}>
      {children}
    </ButtonLinkA>
  )
}

export default ButtonA
