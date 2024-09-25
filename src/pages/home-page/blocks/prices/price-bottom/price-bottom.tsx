import { TypographyVariant } from '@/common'
import {ConnectButtons, Typography} from '@/components'

import s from './price-bottom.module.scss'

export const PriceBottom = () => {
  return (
    <div className={`${s.sectionBottom} section__bottom`}>
      <Typography className={s.sectionBottomText} variant={TypographyVariant.body2}>
        Enjoy 10-20% discounts when buying from 3 months!
      </Typography>
      <div className={`${s.sectionButtons} section__buttons`}>
        <ConnectButtons/>
      </div>
    </div>
  )
}
