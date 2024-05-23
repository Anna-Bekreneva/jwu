import { TypographyVariant } from '@/common'
import { Typography } from '@/components'

export const PricesTop = () => {
  return (
    <div className={'section__top'}>
      <Typography as={'span'} className={'section__label'} variant={TypographyVariant.caption1}>
        Pricing
      </Typography>
      <Typography as={'h2'} isLine variant={TypographyVariant.title1}>
        Jump With Us starting at 500$/hour
      </Typography>
      <Typography>Clear and Simple pricing for your Events&Business</Typography>
    </div>
  )
}
