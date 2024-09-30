import { Link } from 'react-scroll'

import { TypographyVariant } from '@/common'
import { Typography } from '@/components'

import s from './table-contents.module.scss'

import { linkList } from './data'

type Props = {
  className?: string
}
export const TableContents = ({ className }: Props) => {
  return (
    <nav className={`${s.wrapper} ${className}`}>
      <Typography as={'h3'} className={s.title} variant={TypographyVariant.title2}>
        Table of&nbsp;Contents
      </Typography>
      <ul className={s.list}>
        {linkList.map(link => (
          <li key={link.href}>
            <Typography
              as={Link}
              className={s.link}
              href={'#'}
              offset={-40}
              role={'menuitem'}
              smooth
              to={link.href}
              variant={TypographyVariant.strong1}
            >
              {link.label}
            </Typography>
          </li>
        ))}
      </ul>
    </nav>
  )
}
