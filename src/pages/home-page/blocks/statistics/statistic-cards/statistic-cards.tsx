import { StatisticCard, StatisticCardPropsType } from '@/components'

import s from './statistic-card.module.scss'

import { DetailCard } from '../statistics-detail-card/statistics-detail-card'

const cards: StatisticCardPropsType[] = [
  {
    numbers: '47.7%',
    text: 'of people find Mobile Billboards to be effective on\u00A0brand awareness',
  },
  { numbers: '32.8%', text: 'find it influential for\u00A0repeat buyers' },
  { bgColor: '#F7F1FB', numbers: '29.5%', text: 'find it convincing to\u00A0buy a\u00A0product' },
]

export const StatisticCards = () => {
  return (
    <div className={s.items}>
      <DetailCard className={s.statisticCard} />
      {cards.map((card, index) => {
        return (
          <StatisticCard
            className={s.statisticCard}
            key={index}
            numbers={card.numbers}
            text={card.text}
          />
        )
      })}
    </div>
  )
}
