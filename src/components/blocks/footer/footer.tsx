import {TypographyVariant} from '@/common'
import {Logo, Menu, Socials, Typography} from '@/components'

import s from './footer.module.scss'
import {APP_ROUTES} from "@/utils";

export const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={'container container--large'}>
        <div className={s.content}>
          <Logo/>
          <Menu className={s.menu}/>
          <Socials/>
          <div className={s.bottom}>
            <Typography className={s.bottomLink} as={'a'} href={APP_ROUTES.privacyPolicy} variant={TypographyVariant.caption1}>
              Privacy policy
            </Typography>
            <Typography className={s.bottomText} as={'span'} variant={TypographyVariant.caption1}>
              © 2023 JWU Media
            </Typography>
          </div>
        </div>
      </div>
    </footer>
  )
}
