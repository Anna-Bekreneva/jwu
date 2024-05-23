import { TypographyVariant } from '@/common'
import { Typography } from '@/components'

import s from './help-make-top.module.scss'

export const HelpMakeTop = () => {
  return (
    <div className={`${s.sectionTop} section__top`}>
      <Typography as={'span'} className={'section__label'} variant={TypographyVariant.caption1}>
        Our Services
      </Typography>
      <Typography as={'h2'} isLine variant={TypographyVariant.title1}>
        Help make your events unforgettable and&nbsp;business purposes achieve
      </Typography>
    </div>
  )
}
