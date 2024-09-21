import s from './reviews.module.scss'
import {ReviewsTop} from "./reviews-top/reviews-top";
import {ReviewsSwiper} from "./reviews-swiper/reviews-swiper";

export const Reviews = () => {
  return (
    <section className={`section section--bg`} id={'testimonials'}>
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
