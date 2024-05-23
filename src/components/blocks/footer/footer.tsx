import { TypographyVariant } from '@/common'
import { Logo, Menu, Socials, Typography } from '@/components'

import s from './footer.module.scss'

export const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={'container container--large'}>
        <div className={s.content}>
          <Logo />
          <Menu className={s.menu} />
          <Socials />
          <Typography as={'span'} className={s.copyright} variant={TypographyVariant.caption1}>
            © 2023 JWU Media
          </Typography>
        </div>
      </div>
    </footer>
  )
}
