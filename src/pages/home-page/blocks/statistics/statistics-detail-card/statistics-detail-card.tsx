import s from './statistics-detail-card.module.scss'

import { TypographyVariant } from '@/common'
import { Typography } from '@/components'
import {RatingLine, RatingLinePropsType} from "../statistics-rating-line/statistics-rating-line";

const ratingData: RatingLinePropsType[] = [
  { bgColor: '#FFA522', icon: 'jwu', iconAria: 'JWU mobile billboards', percent: 70 },
  { bgColor: '#FF8080', icon: 'youtube', iconAria: 'youtube', percent: 55 },
  { bgColor: '#79B0F7', icon: 'facebook', iconAria: 'facebook', percent: 43 },
]

type Props = {
  className?: string
}

export const DetailCard = ({ className }: Props) => {
  return (
    <div className={`${s.detailCard} ${className}`}>
      <ul className={s.ratings}>
        {ratingData.map((rating, index) => {
          return (
            <li key={index}>
              <RatingLine {...rating} />
            </li>
          )
        })}
      </ul>
      <Typography className={s.descr} variant={TypographyVariant.body2}>
        Digital video in public venues reaches&nbsp;more Americans each month than online videos
        and&nbsp;Facebook!
      </Typography>
    </div>
  )
}
