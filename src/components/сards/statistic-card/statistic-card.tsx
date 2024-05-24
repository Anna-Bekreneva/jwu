import { TypographyVariant } from '@/common'
import { Typography } from '@/components'

import s from './statistic-card.module.scss'

export type StatisticCardPropsType = {
  bgColor?: string
  className?: string
  numbers: string
  text: string
}
export const StatisticCard = ({
  bgColor = '#ffffff',
  className,
  numbers,
  text,
}: StatisticCardPropsType) => {
  return (
    <article className={`${s.card} ${className}`} style={{ backgroundColor: bgColor }}>
      <Typography as={'h3'} className={s.title} variant={TypographyVariant.title1}>
        {numbers}
      </Typography>
      <Typography className={s.text}>{text}</Typography>
    </article>
  )
}
