import { FC } from 'react'

import { TypographyVariant } from '@/common'
import { Picture, PicturePropsType, Typography } from '@/components'

import s from './review-card.module.scss'

export type ReviewCardPropsType = {
  className?: string
  name: string
  position?: string
  text: string[]
} & Partial<Omit<PicturePropsType, 'className'>>
export const ReviewCard: FC<ReviewCardPropsType> = ({
  alt = 'ava',
  className,
  name,
  position,
  src,
  text,
  ...rest
}) => {
  console.log(position)

  return (
    <article className={`${s.card} ${className}`}>
      <div className={s.text}>
        {text.map((item, index) => (
          <Typography key={index}>{item}</Typography>
        ))}
      </div>
      <div className={s.author}>
        {src && <Picture alt={alt} loading={'lazy'} src={src} {...rest} className={s.ava} />}
        <Typography className={s.name} variant={TypographyVariant.body2}>
          {name}{' '}
        </Typography>
        {position && (
          <Typography className={s.position} variant={TypographyVariant.caption1}>
            {position}{' '}
          </Typography>
        )}
      </div>
    </article>
  )
}
