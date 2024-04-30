import {memo} from 'react'

import { TypographyVariant } from '@/common'
import { Typography } from '@/components'

import s from './statistic-card.module.scss'

export type StatisticCardPropsType = {
  className?: string
  numbers: string
  text: string
  bgColor?: string
}
export const StatisticCard = memo(({ className, numbers, text, bgColor = '#ffffff' }: StatisticCardPropsType) => {
  return (
    <article className={`${s.card} ${className}`} style={{backgroundColor: bgColor}}>
      <Typography as={'h3'} className={s.title} variant={TypographyVariant.title1}>
        {numbers}
      </Typography>
      <Typography className={s.text}>{text}</Typography>
    </article>
  )
})
