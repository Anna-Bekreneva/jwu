import { Link } from 'react-scroll'

export type MenuItemProps = {
  href?: string
  text: string
  to: string
}

export const MenuItem = ({ href = '#', text, to }: MenuItemProps) => {
  return (
    <li>
      <Link className={'navigate-link'} href={href} smooth to={to}>
        {text}
      </Link>
    </li>
  )
}
