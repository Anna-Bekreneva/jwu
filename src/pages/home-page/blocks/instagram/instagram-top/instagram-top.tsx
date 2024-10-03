import { TypographyVariant } from '@/common'
import { Button, Typography } from '@/components'
import { CONTACTS } from '@/utils'

import s from './instagram-top.module.scss'

export const InstagramTop = () => {
  return (
    <div className={'section__top'}>
      <Typography as={'h2'} className={s.title} isLine variant={TypographyVariant.title1}>
        Our instagram
      </Typography>
      <Typography>
        Our Mobile LED Billboards are equipped with rising screens and can play video&nbsp;and
        sound!
      </Typography>
      <Button as={'a'} href={CONTACTS.instagram.href} target={'_blank'}>
        @JWUInstagram
      </Button>
    </div>
  )
}
