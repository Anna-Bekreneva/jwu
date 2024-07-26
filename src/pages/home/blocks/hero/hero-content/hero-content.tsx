import {SectionNavigation, Typography} from '@/components'

import s from './hero-content.module.scss'

export const HeroContent = () => {
  return (
    <div className={s.container}>
      <div className={'section__bottom'}>
        <Typography className={s.subtext}>
          “We help people make their events unforgettable and&nbsp;businesses achieve their goals” —{' '}
          <b>JWU&nbsp;Media</b>
        </Typography>
        <SectionNavigation/>
      </div>
    </div>
  )
}
