import { FC } from 'react'

import { ButtonVariant, TypographyVariant } from '@/common'
import {
  Button,
  Picture,
  PicturePropsType,
  ServiceCard,
  ServiceCardProps,
  Typography,
} from '@/components'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/scss'

import s from './hero.module.scss'

type CardType = {
  type: 'card'
} & ServiceCardProps

type PictureType = {
  type: 'picture'
} & PicturePropsType

const dataSwiper: CardType[] | PictureType[] = [
  {
    icon: 'mobile-bilboards',
    title: 'Mobile Billboards',
    type: 'card',
  },
  {
    alt: 'Students',
    avif: '/assets/images/gallery/students-university.avif',
    src: '/assets/images/gallery/students-university.jpg',
    type: 'picture',
    webp: '/assets/images/gallery/students-university.webp',
  },
  {
    icon: 'grand-openings',
    iconBg: 'orange',
    title: 'Grand  Openings',
    type: 'card',
  },
  {
    alt: 'Wedding',
    avif: '/assets/images/gallery/wedding-confetti.avif',
    src: '/assets/images/gallery/wedding-confetti.jpg',
    type: 'picture',
    webp: '/assets/images/gallery/wedding-confetti.webp',
  },
  {
    icon: 'community',
    title: 'Community Events',
    type: 'card',
  },
  {
    alt: 'Looking movie outdoors',
    avif: '/assets/images/gallery/air-cinema.avif',
    src: '/assets/images/gallery/air-cinema.jpg',
    type: 'picture',
    webp: '/assets/images/gallery/air-cinema.webp',
  },
  {
    icon: 'parties',
    iconBg: 'orange',
    title: 'Baby Shower, Gender parties',
    type: 'card',
  },
  {
    alt: 'Woman holding open sign',
    avif: '/assets/images/gallery/woman-holding-open.avif',
    src: '/assets/images/gallery/woman-holding-open.jpg',
    type: 'picture',
    webp: '/assets/images/gallery/woman-holding-open.webp',
  },
  {
    icon: 'corporate',
    title: 'Corporate Outings',
    type: 'card',
  },
]

export const Hero: FC = () => {
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
          <Swiper
            autoplay={{ delay: 0.2 }}
            className={s.swiper}
            freeMode
            loop
            modules={[Autoplay]}
            slidesPerGroup={1}
            slidesPerView={'auto'}
            spaceBetween={16}
            speed={2000}
          >
            {dataSwiper.map((item, index) => {
              return (
                <SwiperSlide
                  className={`${s.slide} ${item.type === 'card' && s.small}`}
                  key={index}
                >
                  {item.type === 'card' ? (
                    <ServiceCard
                      className={s.service}
                      icon={item.icon}
                      iconBg={item.iconBg}
                      title={item.title}
                    />
                  ) : (
                    <div className={s.picture}>
                      <Picture
                        alt={item.alt}
                        avif={item.avif}
                        height={172}
                        src={item.src}
                        webp={item.webp}
                        width={300}
                      />
                    </div>
                  )}
                </SwiperSlide>
              )
            })}
          </Swiper>

          <div className={s.container}>
            <div className={'section__bottom'}>
              <Typography className={s.subtext}>
                “We help people make their events unforgettable and&nbsp;businesses achieve their
                goals” — <b>JWU&nbsp;Media</b>
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
        </div>
      </div>
    </section>
  )
}
