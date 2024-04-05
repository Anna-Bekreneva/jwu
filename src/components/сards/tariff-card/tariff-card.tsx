import { FC, useState } from 'react'
import { Tooltip } from 'react-tooltip'

import { TypographyVariant } from '@/common'
import { Typography } from '@/components'

import 'react-tooltip/dist/react-tooltip.css'

import s from './tariff-card.module.scss'

type PriceType = { hint?: string; id: string; name: string; value: string }

type Props = {
  items: PriceType[]
  pay: string
  text: string
  title: string
}
export const TariffCard: FC<Props> = ({ items, pay, text, title }) => {
  return (
    <article className={s.card}>
      <Typography as={'h3'} className={s.title} variant={TypographyVariant.subtitle}>
        {title}
      </Typography>
      <Typography variant={TypographyVariant.body2}>{text}</Typography>
      <ul className={s.items}>
        {items.map(item => (
          <li key={item.id}>
            <ItemPrice hint={item.hint} id={item.id} name={item.name} value={item.value} />
          </li>
        ))}
      </ul>
      <Typography as={'span'} className={s.pay} variant={TypographyVariant.subtitle}>
        {pay}
      </Typography>
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
