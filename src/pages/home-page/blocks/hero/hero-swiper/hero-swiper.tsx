import { Picture, ServiceCard } from '@/components'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'

import s from './hero-swiper.module.scss'

type CardType = {
  icon: string
  iconBg?: string
  title: string
  type: 'card'
}

type PictureType = {
  alt: string
  basePath: string
  type: 'picture'
}

type DataSwiperType = CardType | PictureType

const dataSwiper: DataSwiperType[] = [
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

export const HeroSwiper = () => {
  return (
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
          <SwiperSlide className={`${s.slide} ${item.type === 'card' && s.small}`} key={index}>
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
  )
}
