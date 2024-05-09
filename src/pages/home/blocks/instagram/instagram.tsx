import { memo } from 'react'

import { TypographyVariant } from '@/common'
import { Button, Picture, Typography } from '@/components'

import s from './instagram.module.scss'

const gallery: { alt: string; path: string }[] = [
  {
    alt: 'Students',
    path: '/assets/images/gallery/students-university',
  },
  {
    alt: 'Wedding',
    path: '/assets/images/gallery/wedding-confetti',
  },
  {
    alt: 'Looking movie outdoors',
    path: '/assets/images/gallery/air-cinema',
  },
  {
    alt: 'Woman holding open sign',
    path: '/assets/images/gallery/woman-holding-open',
  },
  {
    alt: 'friends',
    path: '/assets/images/gallery/friends-selfie',
  },
  {
    alt: 'birthday',
    path: '/assets/images/gallery/celebrating-birthday',
  },
  {
    alt: 'family',
    path: '/assets/images/gallery/family-home',
  },
  {
    alt: 'party',
    path: '/assets/images/gallery/gender-reveal-party',
  },
  {
    alt: 'family',
    path: '/assets/images/gallery/family-with-cake',
  },
  {
    alt: 'wedding',
    path: '/assets/images/gallery/wedding-beach',
  },
]

export const Instagram = memo(() => {
  return (
    <section className={`section section--bg instagram`}>
      <div className={'container'}>
        <div className={'section__wrapper'}>
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
          <ul className={s.items}>
            {gallery.map((item, index) => {
              return (
                <li className={`${s.item} card`} key={index}>
                  <Picture
                    alt={item.alt}
                    avif={`${item.path}.avif`}
                    className={s.img}
                    src={`${item.path}.jpg`}
                    webp={`${item.path}.webp`}
                  />
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
})
