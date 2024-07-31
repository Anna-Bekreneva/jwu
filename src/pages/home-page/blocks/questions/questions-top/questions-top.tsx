import { TypographyVariant } from '@/common'
import { Typography } from '@/components'

export const QuestionsTop = () => {
  return (
    <div className={'section__top'}>
      <Typography as={'span'} className={'section__label'} variant={TypographyVariant.caption1}>
        FAQs
      </Typography>
      <Typography as={'h2'} isLine variant={TypographyVariant.title1}>
        Some questions you may have
      </Typography>
      <Typography>
        Need help with anything? Here you will find our most frequently asked questions
      </Typography>
    </div>
  )
}
