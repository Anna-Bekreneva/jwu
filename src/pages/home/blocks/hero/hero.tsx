import { ButtonVariant, TypographyVariant } from '@/common'
import { Button, Picture, ServiceCard, ServiceCardProps, Typography } from '@/components'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'

import s from './hero.module.scss'

type CardType = {
  type: 'card'
} & ServiceCardProps

type PictureType = {
  alt: string
  basePath: string
  type: 'picture'
}

// todo: edit types | const dataSwiper: CardType[] | PictureType[]

const dataSwiper: CardType[] | PictureType[] = [
  {
    icon: 'mobile-bilboards',
    title: 'Mobile Billboards',
    type: 'card',
  },
  {
    alt: 'Students',
    basePath: '/assets/images/gallery/students-university',
    type: 'picture',
  },
  {
    icon: 'grand-openings',
    iconBg: 'orange',
    title: 'Grand  Openings',
    type: 'card',
  },
  {
    alt: 'Wedding',
    basePath: '/assets/images/gallery/wedding-confetti',
    type: 'picture',
  },
  {
    icon: 'community',
    title: 'Community Events',
    type: 'card',
  },
  {
    alt: 'Looking movie outdoors',
    basePath: '/assets/images/gallery/air-cinema',
    type: 'picture',
  },
  {
    icon: 'parties',
    iconBg: 'orange',
    title: 'Baby Shower, Gender parties',
    type: 'card',
  },
  {
    alt: 'Woman holding open sign',
    basePath: '/assets/images/gallery/woman-holding-open',
    type: 'picture',
  },
  {
    icon: 'corporate',
    title: 'Corporate Outings',
    type: 'card',
  },
]

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
                      icon={item.icon ?? ''}
                      iconBg={item.iconBg as 'orange' | 'purple' | undefined}
                      title={item.title ?? ''}
                    />
                  ) : (
                    <div className={s.picture}>
                      <Picture
                        alt={item.alt ?? ''}
                        avif={`${item.basePath}.avif`}
                        height={172}
                        src={`${item.basePath}.src`}
                        webp={`${item.basePath}.webp`}
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
