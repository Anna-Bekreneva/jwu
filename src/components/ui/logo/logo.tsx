import { Link } from 'react-router-dom'

import s from './logo.module.scss'

import logo from '../../../assets/images/logo.svg'
export const Logo = () => {
  return (
    <Link className={s.logo} to={'/'}>
      <img alt={'logo'} className={s.img} height={42} src={logo} width={84} />
    </Link>
  )
}
