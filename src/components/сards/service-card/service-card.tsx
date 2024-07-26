import { ComponentPropsWithoutRef } from 'react'

import { TypographyVariant } from '@/common'
import { Typography } from '@/components'
import { ServiceData } from '@/pages'

import s from './service-card.module.scss'

export type Props = ServiceData & ComponentPropsWithoutRef<'article'>

export const ServiceCard = ({ className, icon, iconBg = 'purple', text, title }: Props) => {
  const cardClassName = `${s.card} ${text && s.detail} ${className}`

  return (
    <article className={cardClassName}>
      <span
        className={s.icon}
        style={{
          backgroundColor: `${iconBg === 'purple' ? '#bd5dff' : '#ffa522'}`,
          backgroundImage: `url(/assets/icons/service-icons/${icon}.svg)`,
        }}
      />
      <Typography as={'h3'} variant={TypographyVariant.strong1}>
        {title}
      </Typography>
      <Typography as={'h3'} variant={TypographyVariant.caption2}>
        {text}
      </Typography>
    </article>
  )
}
