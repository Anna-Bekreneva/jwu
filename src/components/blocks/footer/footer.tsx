import { TypographyVariant } from '@/common'
import { Logo, Menu, Socials, Typography } from '@/components'
import { APP_ROUTES } from '@/utils'

import s from './footer.module.scss'

export const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={'container container--large'}>
        <div className={s.content}>
          <Logo />
          <Menu className={s.menu} />
          <Socials />
          <div className={s.bottom}>
            <Typography
              as={'a'}
              className={s.bottomLink}
              href={APP_ROUTES.privacyPolicy}
              variant={TypographyVariant.caption1}
            >
              Privacy policy
            </Typography>
            <Typography as={'span'} className={s.bottomText} variant={TypographyVariant.caption1}>
              © 2023 JWU Media
            </Typography>
          </div>
        </div>
      </div>
    </footer>
  )
}
