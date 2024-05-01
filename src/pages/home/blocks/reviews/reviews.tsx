import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import s from './reviews.module.scss'
import './reviews-swiper.scss'

import {ReviewCard, Typography} from "@/components";
import {TypographyVariant} from "@/common";
import {Autoplay, Pagination} from 'swiper/modules'
import {Swiper, SwiperSlide} from 'swiper/react'
import {memo} from "react";

const reviews = [
  {
    name: 'Vitaliy Kusaev',
    position: 'Investigator',
    text: ['Spotted your mobile billboard ad, and I can\'t help but applaud its eye-catching design! Incredibly creative with vibrant colors, it\'s truly memorable. I even took a\u00A0photo and shared it with friends!'],
    alt: 'Vitaliy Kusaev',
    basePath: '/assets/images/reviews/1'
  },
  {
    name: 'Ruben Davydov',
    position: 'Lawyer',
    text: ['Thanks for\u00A0the\u00A0fantastic mobile billboard advertising! Not only did\u00A0it\u00A0grab attention, but\u00A0it\u00A0also introduced me\u00A0to\u00A0your\u00A0product. Very professional and\u00A0effective!'],
    alt: 'Ruben Davydov',
    basePath: '/assets/images/reviews/2'
  },
  {
    name: 'Igor Rafailov',
    position: 'E-Z Sell Realty',
    text: ['Your mobile billboard ad\u00A0hit\u00A0the\u00A0bullseye! It\u00A0was so\u00A0noticeable in\u00A0the\u00A0city flow that\u00A0I\u00A0decided to\u00A0try your product. The result - completely satisfied expectations and\u00A0a\u00A0positive impression from the advertising.'],
    alt: 'Igor Rafailov',
    basePath: '/assets/images/reviews/3'
  }
]
export const Reviews = memo(() => {
  return (
    <section className={`section section--bg`}>
      <div className={'container'}>
        <div className={'section__wrapper'}>
          <div className={'section__top'}>
            <Typography
              as={'span'}
              className={'section__label'}
              variant={TypographyVariant.caption1}
            >
              Testimonials
            </Typography>
            <Typography as={'h2'} isLine variant={TypographyVariant.title1}>
              What people say about JWU Media
            </Typography>
          </div>
          <div className={s.swiperWrapper}>
            <Swiper
              autoplay={{delay: 8000}}
              className={s.swiper}
              modules={[Autoplay, Pagination]}
              slidesPerGroup={1}
              slidesPerView={1}
              spaceBetween={20}
              pagination={{clickable: true}}
            >
              {reviews.map((review, index) => {
                return (
                  <SwiperSlide className={`${s.slider} card`} key={index}>
                    <div className={s.sliderWrapper}>
                      <ReviewCard
                        className={s.card}
                        text={review.text}
                        name={review.name}
                        alt={review.alt}
                        src={`${review.basePath}.jpg`}
                        webp={`${review.basePath}.webp`}
                        avif={`${review.basePath}.avif`}
                        position={review.position}
                      />
                    </div>
                  </SwiperSlide>
                )
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  )
})