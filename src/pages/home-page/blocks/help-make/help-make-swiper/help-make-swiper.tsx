import { Picture } from '@/components'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/scss'

import s from './help-make-swiper.module.scss'

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

export const HelpMakeSwiper = () => {
  return (
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
  )
}
