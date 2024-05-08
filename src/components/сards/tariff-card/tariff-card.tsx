import { FC, useEffect, useState } from 'react'
import { Tooltip } from 'react-tooltip'

import { TypographyVariant } from '@/common'
import { Picture, Typography } from '@/components'
import { Fancybox as NativeFancybox } from '@fancyapps/ui'
import { Swiper, SwiperSlide } from 'swiper/react'

import '@fancyapps/ui/dist/fancybox/fancybox.css'
import 'react-tooltip/dist/react-tooltip.css'
import 'swiper/scss'

import s from './tariff-card.module.scss'

type PriceType = { hint?: string; id: string; name: string; value: string }

export type TariffType = {
  additionalText?: string
  fancyboxName?: string
  gallery?: Array<{ alt: string; basePath: string; fancyboxHref?: string }>
  items?: PriceType[]
  pay: string
  text: string
  title: string
  type?: 'exclusive' | 'standard'
}
export const TariffCard: FC<TariffType> = ({
  additionalText,
  fancyboxName,
  gallery,
  items,
  pay,
  text,
  title,
  type = 'standard',
}) => {
  const cardClassName = `${s.card} ${s[String(type)]}`

  useEffect(() => {
    NativeFancybox.bind(`[data-fancybox=${fancyboxName}]`)

    return () => {
      NativeFancybox.unbind(`[data-fancybox=${fancyboxName}]`)
    }
  })

  return (
    <article className={cardClassName}>
      <div className={s.content}>
        <Typography
          as={'h3'}
          className={s.title}
          variant={type === 'exclusive' ? TypographyVariant.title2 : TypographyVariant.subtitle}
        >
          {title}
        </Typography>
        <Typography className={s.text} variant={TypographyVariant.body2}>
          {text}
        </Typography>
        {gallery && (
          <div className={s.galleryWrapper}>
            <Swiper
              className={s.gallery}
              slidesPerGroup={1}
              slidesPerView={'auto'}
              spaceBetween={8}
            >
              {gallery.map((item, index) => (
                <SwiperSlide className={s.galleryItem} key={index}>
                  <a
                    data-fancybox={fancyboxName}
                    href={item.fancyboxHref ?? `${item.basePath}.jpg`}
                  >
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
        )}
        {additionalText && (
          <Typography className={s.text} variant={TypographyVariant.body2}>
            {additionalText}
          </Typography>
        )}
      </div>
      <div className={s.info}>
        {items?.length && (
          <ul className={s.priceItems}>
            {items.map(item => (
              <li className={s.priceItem} key={item.id}>
                <ItemPrice hint={item.hint} id={item.id} name={item.name} value={item.value} />
              </li>
            ))}
          </ul>
        )}
        <Typography as={'span'} className={s.pay} variant={TypographyVariant.subtitle}>
          {pay}
        </Typography>
      </div>
    </article>
  )
}

const ItemPrice: FC<PriceType> = ({ hint, id, name, value }) => {
  const [isShowHint, setIsShowHint] = useState(false)

  return (
    <div className={s.price}>
      <Typography as={'span'} variant={TypographyVariant.body2}>
        {name}
      </Typography>
      <div className={s.value}>
        <Typography as={'span'} variant={TypographyVariant.strong2}>
          {value}
        </Typography>
        {hint && (
          <button
            aria-controls={id}
            aria-expanded={isShowHint}
            aria-label={isShowHint ? 'close hint' : 'open hint'}
            className={s.showHint}
            data-event={'click'}
            data-tip={'custom show'}
            data-tooltip-id={id}
            data-tooltip-place={'top-end'}
            onClick={() => setIsShowHint(!isShowHint)}
            type={'button'}
          />
        )}
      </div>
      {hint && (
        <Tooltip
          aria-desc
          aria-labelledby={id}
          className={s.hint}
          classNameArrow={s.arrow}
          id={id}
          isOpen={isShowHint}
          opacity={1}
          openOnClick
          setIsOpen={() => setIsShowHint(!isShowHint)}
        >
          <Typography variant={TypographyVariant.caption1}>{hint}</Typography>
        </Tooltip>
      )}
    </div>
  )
}
