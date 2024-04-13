import { FC } from 'react'

import { TypographyVariant } from '@/common'
import { Typography } from '@/components'

import s from './statistic-card.module.scss'

type Props = {
  className?: string
  numbers: string
  text: string
}
export const StatisticCard: FC<Props> = ({ className, numbers, text }) => {
  return (
    <article className={`${s.card} ${className}`}>
      <Typography as={'h3'} className={s.title} variant={TypographyVariant.title1}>
        {numbers}
      </Typography>
      <Typography className={s.text}>{text}</Typography>
    </article>
  )
}
