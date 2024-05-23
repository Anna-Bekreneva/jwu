import { ButtonVariant } from '@/common'
import { Social, SocialPropsType } from '@/components'

import s from './socials.module.scss'

type Props = {
  className?: string
}

export const dataSocials: SocialPropsType[] = [
  {
    'aria-label': 'whatsapp',
    className: s.whatsapp,
    href: '#',
    idIcon: 'whatsapp',
  },
  {
    'aria-label': 'email',
    href: '#',
    idIcon: 'email',
  },
  {
    'aria-label': 'instagram',
    href: '#',
    idIcon: 'instagram',
  },
  {
    'aria-label': 'facebook',
    href: '#',
    idIcon: 'facebook',
  },
]

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
