import { TypographyVariant } from '@/common'
import { Button, Typography } from '@/components'

export const InstagramTop = () => {
  return (
    <div className={'section__top'}>
      <Typography as={'h2'} isLine variant={TypographyVariant.title1}>
        Our instagram
      </Typography>
      <Typography>
        Our Mobile LED Billboards are equipped with rising screens and can play video&nbsp;and
        sound!
      </Typography>
      <Button
        as={'a'}
        href={'https://www.instagram.com/jwumedia?igsh=YXN2dDhqNnkwZGZ3&utm_source=qr'}
        target={'_blank'}
      >
        @JWUInstagram
      </Button>
    </div>
  )
}
