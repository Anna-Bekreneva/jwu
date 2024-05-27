import { Link } from 'react-scroll'

import s from './menu.module.scss'

import sprite from '../../../assets/icons/sprite.svg'

const menuData: MenuItemProps[] = [
  { text: 'Our Services', to: 'services' },
  { text: 'Testimonials', to: 'testimonials' },
  { text: 'Pricing', to: 'pricing' },
  { text: 'FAQ', to: 'faq' },
  { href: 'tel:+7327886611', icon: 'phone', text: '7327886611', to: '' },
]

type MenuProps = {
  className?: string
}

export const Menu = ({ className }: MenuProps) => {
  return (
    <ul className={`${s.menu} ${className}`}>
      {menuData.map((item, index) => (
        <MenuItem href={item.href} icon={item.icon} key={index} text={item.text} to={item.to} />
      ))}
    </ul>
  )
}

type MenuItemProps = {
  href?: string
  icon?: string
  text: string
  to: string
}

const MenuItem = ({ href = '#', icon, text, to }: MenuItemProps) => {
  return (
    <li className={s.item}>
      <Link
        className={`${s.link} ${icon && s.linkWithIcon}`}
        href={href}
        role={'menuitem'}
        smooth
        to={to}
      >
        {icon && (
          <svg
            aria-hidden
            className={s.icon}
            viewBox={'0 0 24 24'}
            xmlns={'http://www.w3.org/2000/svg'}
          >
            <use height={24} width={24} xlinkHref={`${sprite}#${icon}`} />
          </svg>
        )}
        {text}
      </Link>
    </li>
  )
}
