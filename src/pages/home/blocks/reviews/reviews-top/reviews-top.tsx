import { TypographyVariant } from '@/common'
import { Typography } from '@/components'

export const ReviewsTop = () => {
  return (
    <div className={'section__top'}>
      <Typography as={'span'} className={'section__label'} variant={TypographyVariant.caption1}>
        Testimonials
      </Typography>
      <Typography as={'h2'} isLine variant={TypographyVariant.title1}>
        What people say about JWU Media
      </Typography>
    </div>
  )
}
