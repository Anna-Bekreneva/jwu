import s from './statistics-rating-line.module.scss'

export type RatingLinePropsType = {
  bgColor: string
  icon?: string
  iconAria: string
  percent: number
}

export const RatingLine = ({ bgColor, icon, iconAria, percent }: RatingLinePropsType) => {
  return (
    <div className={s.ratingBack}>
      <div className={s.ratingFront} style={{ backgroundColor: bgColor, width: `${percent}%` }}>
        {percent}%
      </div>
      {icon && (
        <div
          aria-label={iconAria}
          className={s.ratingIcon}
          style={{ backgroundImage: `url('/assets/icons/statistic-icons/${icon}.svg')` }}
        />
      )}
    </div>
  )
}
