import { TypographyVariant } from '@/common'
import { Typography } from '@/components'
import { HeroContent, HeroSwiper } from '@/pages'

import s from './hero.module.scss'

export const Hero = () => {
  return (
    <section className={`${s.hero} hero`}>
      <div className={'container container--large'}>
        <div className={s.wrapper}>
          <div className={s.container}>
            <Typography as={'h1'} className={s.title} variant={TypographyVariant.large}>
              Mobile&nbsp;Billboards in New York
              <Typography
                as={'span'}
                className={s.subtitle}
                isLine
                variant={TypographyVariant.title1}
              >
                for your business&events
              </Typography>
            </Typography>
          </div>
          <HeroSwiper />
          <HeroContent />
        </div>
      </div>
    </section>
  )
}
