import { ButtonVariant, TypographyVariant } from '@/common'
import { Button, Typography } from '@/components'

export const VideosTop = () => {
  return (
    <div className={'section__top'}>
      <Typography as={'h2'} isLine variant={TypographyVariant.title1}>
        Introduce for you our Mobile Billboards
      </Typography>
      <Typography>
        Our Mobile LED Billboards are equipped with rising screens and&nbsp;can play
        video&nbsp;and&nbsp;sound!
      </Typography>
      <div className={'section__buttons'}>
        <Button as={'a'} className={'section__button'} href={'#'}>
          get a free consultation
        </Button>
        <Button as={'a'} className={'section__button'} href={'#'} variant={ButtonVariant.secondary}>
          See prices
        </Button>
      </div>
    </div>
  )
}
