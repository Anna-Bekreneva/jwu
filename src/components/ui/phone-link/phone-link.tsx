import sprite from '@/assets/icons/sprite.svg'
import { CONTACTS } from '@/utils'

import s from './phone-link.module.scss'

export const PhoneLink = () => {
  return (
    <a className={`navigate-link ${s.link}`} href={CONTACTS.phone.href}>
      <svg
        aria-hidden
        className={s.icon}
        viewBox={'0 0 24 24'}
        xmlns={'http://www.w3.org/2000/svg'}
      >
        <use height={24} width={24} xlinkHref={`${sprite}#phone`} />
      </svg>
      {CONTACTS.phone.label}
    </a>
  )
}
