import { useEffect } from 'react'

import { TypographyVariant } from '@/common'
import { GallerySwiper, GalleryType, PriceItem, PriceType, Typography } from '@/components'
import { Fancybox as NativeFancybox } from '@fancyapps/ui'

import s from './tariff-card.module.scss'

export type TariffType = {
  additionalText?: string
  fancyboxName?: string
  gallery?: GalleryType[]
  items?: PriceType[]
  pay: string
  text: string
  title: string
  type?: 'exclusive' | 'standard'
}
export const TariffCard = ({
  additionalText,
  fancyboxName,
  gallery,
  items,
  pay,
  text,
  title,
  type = 'standard',
}: TariffType) => {
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
        {gallery && <GallerySwiper fancyboxName={fancyboxName} gallery={gallery} />}
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
                <PriceItem hint={item.hint} id={item.id} name={item.name} value={item.value} />
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
