import { FC } from 'react'

import { ButtonVariant, TypographyVariant } from '@/common'
import { Logo, Menu, Social, Typography } from '@/components'
import { SocialPropsType } from '@/components/ui/social'

import s from './footer.module.scss'

const dataSocials: SocialPropsType[] = [
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

export const Footer: FC = () => {
  return (
    <footer className={s.footer}>
      <div className={'container container--large'}>
        <div className={s.content}>
          <Logo />
          <Menu className={s.menu} />
          <ul className={s.socials}>
            {dataSocials.map((social, index) => {
              return (
                <li className={s.item} key={index}>
                  <Social
                    aria-label={social['aria-label']}
                    className={`${s.link} ${social.className}`}
                    idIcon={social.idIcon}
                    stroke={social.stroke}
                    target={'_blank'}
                    variant={ButtonVariant.secondary}
                  />
                </li>
              )
            })}
          </ul>
          <Typography as={'span'} className={s.copyright} variant={TypographyVariant.caption1}>
            © 2023 JWU Media
          </Typography>
        </div>
      </div>
    </footer>
  )
}
