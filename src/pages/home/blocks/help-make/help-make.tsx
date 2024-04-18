import React, { FC } from 'react'

import { ButtonVariant, TypographyVariant } from '@/common'
import { Button, Picture, ServiceCard, ServiceCardProps, Typography } from '@/components'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/scss'

import s from './help-make.module.scss'

const dataServices: ServiceCardProps[] = [
  {
    icon: 'mobile-bilboards',
    text: 'Advertising on\u00A0mobile billboards for your business',
    title: 'Mobile Billboards',
  },
  {
    icon: 'wedding',
    iconBg: 'orange',
    text: 'Weddings, anniversaries, dinners and engagements',
    title: 'Wedding Events',
  },
  {
    icon: 'community',
    text: 'Movie nights, parades, or\u00A0anything else',
    title: 'Community Events',
  },
  {
    icon: 'grand-openings',
    iconBg: 'orange',
    text: 'For your shops, restaurants, clubs, or\u00A0anything else',
    title: 'Grand Openings',
  },
  {
    icon: 'corporate',
    iconBg: 'orange',
    text: 'Corporate event, team building,  work and\u00A0career-related event',
    title: 'Corporate Outings',
  },
  {
    icon: 'parties',
    text: 'Baby’s\u00A0birthdays, graduations or\u00A0any party for your child',
    title: 'Baby Shower, Gender parties',
  },
  {
    icon: 'parties',
    iconBg: 'orange',
    text: 'Сonferences, school dances, graduations or\u00A0anything else',
    title: 'Proms, School Events',
  },
  {
    icon: 'anniversaries',
    text: 'Birthdays, Christmas, Halloween, New Year, or\u00A0anything else',
    title: 'Anniversaries, Happy b-days',
  },
]

const dataSwiper: { alt: string; path: string }[] = [
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
]

export const HelpMake: FC = () => {
  return (
    <section className={`${s.section} section section--bg`}>
      <div className={'container'}>
        <div className={'section__wrapper'}>
          <div className={'section__top'}>
            <Typography
              as={'span'}
              className={'section__label'}
              variant={TypographyVariant.caption1}
            >
              Our Services
            </Typography>
            <Typography as={'h2'} isLine variant={TypographyVariant.title1}>
              Help make your events unforgettable and&nbsp;business purposes achieve
            </Typography>
          </div>
          <div className={s.wrapper}>
            <ul className={s.items}>
              {dataServices.map((item, index) => (
                <li className={s.item} key={index}>
                  <ServiceCard
                    className={s.serviceCard}
                    icon={item.icon}
                    iconBg={item.iconBg}
                    text={item.text}
                    title={item.title}
                  />
                </li>
              ))}
            </ul>
            <Swiper
              autoplay={{ delay: 8000 }}
              className={s.swiper}
              modules={[Autoplay]}
              slidesPerGroup={1}
              slidesPerView={1}
              spaceBetween={20}
            >
              {dataSwiper.map((item, index) => {
                return (
                  <SwiperSlide className={`${s.slider} card`} key={index}>
                    <Picture
                      alt={item.alt}
                      avif={`${item.path}.avif`}
                      className={s.picture}
                      src={`${item.path}.jpg`}
                      webp={`${item.path}.webp`}
                    />
                  </SwiperSlide>
                )
              })}
            </Swiper>
          </div>
          <div className={`${s.bottom} section__bottom`}>
            <Typography className={s.subtext}>
              We will be happy to help make any&nbsp;of&nbsp;your events memorable
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
    </section>
  )
}
