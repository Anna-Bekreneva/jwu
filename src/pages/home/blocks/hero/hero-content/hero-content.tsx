import { ButtonVariant } from '@/common'
import { Button, Typography } from '@/components'

import s from './hero-content.module.scss'

export const HeroContent = () => {
  return (
    <div className={s.container}>
      <div className={'section__bottom'}>
        <Typography className={s.subtext}>
          “We help people make their events unforgettable and&nbsp;businesses achieve their goals” —{' '}
          <b>JWU&nbsp;Media</b>
        </Typography>
        <div className={'section__buttons'}>
          <Button as={'a'} className={'section__button'} href={'#'}>
            get a free consultation
          </Button>
          <Button
            as={'a'}
            className={'section__button'}
            href={'#'}
            variant={ButtonVariant.secondary}
          >
            See prices
          </Button>
        </div>
      </div>
    </div>
  )
}
