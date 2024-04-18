import React, { FC } from 'react'

import { ButtonVariant, TypographyVariant } from '@/common'
import { Button, Typography } from '@/components'

import s from './videos.module.scss'

const dataVideo: { src: string }[] = [
  { src: '/assets/videos/1.mp4' },
  { src: '/assets/videos/2.mp4' },
]

export const Videos: FC = () => {
  return (
    <section className={`section ${s.section}`}>
      <div className={'container container--large'}>
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
        <ul className={s.items}>
          {dataVideo.map((item, index) => (
            <li className={s.item} key={index}>
              <video autoPlay controls loop muted src={item.src}></video>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
