import { Picture } from '@/components'
import { Swiper, SwiperSlide } from 'swiper/react'

import '@fancyapps/ui/dist/fancybox/fancybox.css'
import 'swiper/scss'

import s from './gallery-swiper.module.scss'

type Props = {
  fancyboxName?: string
  gallery: GalleryType[]
}

export type GalleryType = {
  alt: string
  basePath: string
  fancyboxHref?: string
}

export const GallerySwiper = ({ fancyboxName, gallery }: Props) => {
  return (
    <div className={s.galleryWrapper}>
      <Swiper className={s.gallery} slidesPerGroup={1} slidesPerView={'auto'} spaceBetween={8}>
        {gallery.map((item, index) => (
          <SwiperSlide className={s.galleryItem} key={index}>
            <a data-fancybox={fancyboxName} href={item.fancyboxHref ?? `${item.basePath}.jpg`}>
              <Picture
                alt={item.alt}
                avif={`${item.basePath}.avif`}
                className={s.galleryPicture}
                height={75}
                loading={'lazy'}
                src={`${item.basePath}.jpg`}
                webp={`${item.basePath}.webp`}
                width={132}
              />
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
