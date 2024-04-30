import {memo} from "react";
import s from './statistics.module.scss'
import {Picture, StatisticCard, StatisticCardPropsType, Typography} from "@/components";
import {TypographyVariant} from "@/common";

const cards: StatisticCardPropsType[] = [
  {numbers: '47.7%', text: 'of people find Mobile Billboards to be effective on\u00A0brand awareness'},
  {numbers: '32.8%', text: 'find it influential for\u00A0repeat buyers'},
  {numbers: '29.5%', text: 'find it convincing to\u00A0buy a\u00A0product', bgColor: '#F7F1FB'},
]

const ratingData: RatingLinePropsType[] = [
  {icon: 'jwu', iconAria: 'JWU mobile billboards', bgColor: '#FFA522', percent: 70},
  {icon: 'youtube', iconAria: 'youtube', bgColor: '#FF8080', percent: 55},
  {icon: 'facebook', iconAria: 'facebook', bgColor: '#79B0F7', percent: 43},
]

const picture = {
  basePath: '/assets/images/gallery/wedding-beach',
  alt: 'Wedding'
}

export const Statistics = memo(() => {
  return (<section className={`${s.section} section`}>
    <div className={'container container--large'}>
      <div className={`${s.sectionTop} section__top`}>
        <Typography as={'h2'} isLine variant={TypographyVariant.title1}>
          The statistics speak for&nbsp;themselves
        </Typography>
        <Typography>
          Effective achievement of your personal and business goals
        </Typography>
      </div>
      <div className={s.wrapper}>
        <div className={`${s.pictureWrapper} card`}>
          <Picture
            alt={picture.alt}
            className={s.img}
            avif={`${picture.basePath}.avif`}
            src={`${picture.basePath}.jpg`}
            webp={`${picture.basePath}.webp`}
          />
        </div>
        <div className={s.items}>
          <div className={`${s.detailCard} ${s.statisticCard}`}>
            <ul className={s.ratings}>
              {ratingData.map((rating, index) => {
                return <li key={index} className={s.rating}>
                  <RatingLine {...rating}/>
                </li>
              })}
            </ul>
            <Typography variant={TypographyVariant.body2} className={s.descr}>
              Digital video in public venues reaches&nbsp;more Americans each month than online videos
              and&nbsp;Facebook!
            </Typography>
          </div>
          {cards.map((card, index) => {
            return <StatisticCard className={s.statisticCard} key={index} text={card.text} numbers={card.numbers}/>
          })}
        </div>
      </div>
    </div>
  </section>)
})

type RatingLinePropsType = {
  percent: number
  bgColor: string
  icon?: string
  iconAria: string
}

const RatingLine = memo(({bgColor, percent, icon, iconAria}: RatingLinePropsType) => {
  return (
    <div className={s.ratingBack}>
      <div className={s.ratingFront} style={{backgroundColor: bgColor, width: `${percent}%`}}>{percent}%</div>
      {icon &&
          <div className={s.ratingIcon} style={{backgroundImage: `url('/assets/icons/statistic-icons/${icon}.svg')`}}
               aria-label={iconAria}/>}
    </div>
  )
})