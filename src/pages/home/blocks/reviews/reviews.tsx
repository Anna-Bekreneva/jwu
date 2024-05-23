import { ReviewsSwiper, ReviewsTop } from '@/pages'

import s from './reviews.module.scss'

export const Reviews = () => {
  return (
    <section className={`section section--bg`}>
      <div className={'container'}>
        <div className={'section__wrapper'}>
          <ReviewsTop />
          <div className={s.swiperWrapper}>
            <ReviewsSwiper />
          </div>
        </div>
      </div>
    </section>
  )
}
