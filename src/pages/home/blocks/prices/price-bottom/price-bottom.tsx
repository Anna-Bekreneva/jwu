import sprite from '@/assets/icons/sprite.svg'
import { TypographyVariant } from '@/common'
import { Button, Typography } from '@/components'

import s from './price-bottom.module.scss'

export const PriceBottom = () => {
  return (
    <div className={`${s.sectionBottom} section__bottom`}>
      <Typography className={s.sectionBottomText} variant={TypographyVariant.body2}>
        Enjoy 10-20% discounts when buying from 3 months!
      </Typography>
      <div className={`${s.sectionButtons} section__buttons`}>
        <Button as={'a'} className={'section__button'} href={'#'}>
          Contact us
        </Button>
        <Button aria-label={'whatsapp'} as={'a'} className={s.sectionButton} href={'#'} isIcon>
          <svg aria-hidden fill={'#fff'} viewBox={'0 0 24 24'} xmlns={'http://www.w3.org/2000/svg'}>
            <use xlinkHref={`${sprite}#whatsapp`} />
          </svg>
        </Button>
        <Button aria-label={'email'} as={'a'} className={s.sectionButton} href={'#'} isIcon>
          <svg
            aria-hidden
            fill={'transparent'}
            stroke={'white'}
            viewBox={'0 0 24 24'}
            xmlns={'http://www.w3.org/2000/svg'}
          >
            <use xlinkHref={`${sprite}#email`} />
          </svg>
        </Button>
      </div>
    </div>
  )
}
