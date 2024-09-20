import { Picture } from '@/components'
import { gallery } from '@/pages'

import s from './instagram-gallery.module.scss'

export const InstagramGallery = () => {
  return (
    <ul className={s.items}>
      {gallery.map((item, index) => {
        return (
          <li className={`${s.item} card`} key={index}>
            <Picture
              alt={item.alt}
              avif={`${item.path}.avif`}
              className={s.img}
              src={`${item.path}.jpg`}
              webp={`${item.path}.webp`}
            />
          </li>
        )
      })}
    </ul>
  )
}
