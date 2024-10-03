import { ButtonVariant } from '@/common'
import { Social } from '@/components'

import s from './socials.module.scss'

import { dataSocials } from './socials-data'

type Props = {
  className?: string
}

export const Socials = ({ className }: Props) => {
  return (
    <ul className={`${s.socials} ${className}`}>
      {dataSocials.map((social, index) => {
        return (
          <li key={index}>
            <Social
              aria-label={social['aria-label']}
              className={`${s.link} ${social.className}`}
              href={social.href}
              idIcon={social.idIcon}
              stroke={social.stroke}
              target={'_blank'}
              variant={ButtonVariant.secondary}
            />
          </li>
        )
      })}
    </ul>
  )
}
