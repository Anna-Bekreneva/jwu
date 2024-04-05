import { ComponentPropsWithoutRef, FC, ReactNode } from 'react'

import { TypographyVariant } from '@/common'
import { Typography } from '@/components'

import s from './service-card.module.scss'

type Props = {
  icon: string
  iconBg: 'orange' | 'purple'
  text?: ReactNode
  title: string
} & ComponentPropsWithoutRef<'article'>

export const ServiceCard: FC<Props> = ({ className, icon, iconBg = 'purple', text, title }) => {
  const cardClassName = `${s.card} ${text && s.detail} ${className}`

  return (
    <article className={cardClassName}>
      <span
        className={s.icon}
        style={{
          backgroundColor: `${iconBg === 'purple' ? '#bd5dff' : '#ffa522'}`,
          backgroundImage: `url(/assets/images/service-icons/${icon}.svg)`,
        }}
      />
      <Typography as={'h3'} variant={TypographyVariant.subtitle}>
        {title}
      </Typography>
      {text}
    </article>
  )
}
