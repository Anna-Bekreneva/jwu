import { ReviewCard } from '@/components'
import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import './reviews-swiper.scss'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import s from './reviews-swiper.module.scss'

const reviews = [
  {
    alt: 'Vitaliy Kusaev',
    basePath: '/assets/images/reviews/1',
    name: 'Vitaliy Kusaev',
    position: 'Investigator',
    text: [
      "Spotted your mobile billboard ad, and I can't help but applaud its eye-catching design! Incredibly creative with vibrant colors, it's truly memorable. I even took a\u00A0photo and shared it with friends!",
    ],
  },
  {
    alt: 'Ruben Davydov',
    basePath: '/assets/images/reviews/2',
    name: 'Ruben Davydov',
    position: 'Lawyer',
    text: [
      'Thanks for\u00A0the\u00A0fantastic mobile billboard advertising! Not only did\u00A0it\u00A0grab attention, but\u00A0it\u00A0also introduced me\u00A0to\u00A0your\u00A0product. Very professional and\u00A0effective!',
    ],
  },
  {
    alt: 'Igor Rafailov',
    basePath: '/assets/images/reviews/3',
    name: 'Igor Rafailov',
    position: 'E-Z Sell Realty',
    text: [
      'Your mobile billboard ad\u00A0hit\u00A0the\u00A0bullseye! It\u00A0was so\u00A0noticeable in\u00A0the\u00A0city flow that\u00A0I\u00A0decided to\u00A0try your product. The result - completely satisfied expectations and\u00A0a\u00A0positive impression from the advertising.',
    ],
  },
]

export const ReviewsSwiper = () => {
  return (
    <Swiper
      autoplay={{ delay: 8000 }}
      modules={[Autoplay, Pagination]}
      pagination={{ clickable: true }}
      slidesPerGroup={1}
      slidesPerView={1}
      spaceBetween={20}
    >
      {reviews.map((review, index) => {
        return (
          <SwiperSlide className={`${s.slider} card`} key={index}>
            <div className={s.sliderWrapper}>
              <ReviewCard
                alt={review.alt}
                avif={`${review.basePath}.avif`}
                className={s.card}
                name={review.name}
                position={review.position}
                src={`${review.basePath}.jpg`}
                text={review.text}
                webp={`${review.basePath}.webp`}
              />
            </div>
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}
