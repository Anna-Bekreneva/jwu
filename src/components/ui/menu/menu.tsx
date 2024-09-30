import { PhoneLink } from '@/components'

import s from './menu.module.scss'

import { MenuItem, MenuItemProps } from './menu-item'

const menuData: MenuItemProps[] = [
  { text: 'Our Services', to: 'services' },
  { text: 'Testimonials', to: 'testimonials' },
  { text: 'Pricing', to: 'pricing' },
  { text: 'FAQ', to: 'faq' },
]

type MenuProps = {
  className?: string
}

export const Menu = ({ className }: MenuProps) => {
  return (
    <div className={`${s.menu} ${className}`}>
      <ul className={s.menu}>
        {menuData.map((item, index) => (
          <MenuItem href={item.href} key={index} text={item.text} to={item.to} />
        ))}
      </ul>
      <PhoneLink />
    </div>
  )
}
