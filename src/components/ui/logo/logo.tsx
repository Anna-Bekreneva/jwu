import { FC } from 'react'
import { Link } from 'react-router-dom'

import s from './logo.module.scss'

import logo from '../../../assets/images/logo.svg'

type Props = {
  className?: string
  to?: string
}
export const Logo: FC<Props> = ({ className, to = '/' }) => {
  return (
    <Link className={`${s.logo} ${className}`} to={to}>
      <img alt={'logo'} className={s.img} height={42} src={logo} width={84} />
    </Link>
  )
}
