import { TypographyVariant } from '@/common'
import { Picture, Typography } from '@/components'

import s from './statistics.module.scss'

import { StatisticCards } from './statistic-cards/statistic-cards'

const picture = {
  alt: 'Wedding',
  basePath: '/assets/images/gallery/wedding-beach',
}

export const Statistics = () => {
  return (
    <section className={`${s.section} section`}>
      <div className={'container container--large'}>
        <div className={`${s.sectionTop} section__top`}>
          <Typography as={'h2'} isLine variant={TypographyVariant.title1}>
            The statistics speak for&nbsp;themselves
          </Typography>
          <Typography>Effective achievement of your personal and business goals</Typography>
        </div>
        <div className={s.wrapper}>
          <div className={`${s.pictureWrapper} card`}>
            <Picture
              alt={picture.alt}
              avif={`${picture.basePath}.avif`}
              className={s.img}
              src={`${picture.basePath}.jpg`}
              webp={`${picture.basePath}.webp`}
            />
          </div>
          <StatisticCards />
        </div>
      </div>
    </section>
  )
}
