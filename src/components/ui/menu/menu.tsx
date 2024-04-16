import { FC } from 'react'

import { TypographyVariant } from '@/common'
import { Typography } from '@/components'

import s from './menu.module.scss'

import sprite from '../../../assets/icons/sprite.svg'

const menuData: MenuItemProps[] = [
  { href: '#services', text: 'Our Services' },
  { href: '#testimonials', text: 'Testimonials' },
  { href: '#pricing', text: 'Pricing' },
  { href: '#faq', text: 'FAQ' },
  { href: 'tel:+7327886611', icon: 'phone', text: '7327886611' },
]

type MenuProps = {
  className?: string
}

export const Menu: FC<MenuProps> = ({ className }) => {
  return (
    <ul className={`${s.menu} ${className}`}>
      {menuData.map((item, index) => (
        <MenuItem href={item.href} icon={item.icon} key={index} text={item.text} />
      ))}
    </ul>
  )
}

type MenuItemProps = {
  href: string
  icon?: string
  text: string
}

const MenuItem: FC<MenuItemProps> = ({ href, icon, text }) => {
  return (
    <li className={s.item}>
      <Typography
        as={'a'}
        className={`${s.link} ${icon && s.linkWithIcon}`}
        href={href}
        variant={TypographyVariant.strong2}
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
      </Typography>
    </li>
  )
}
