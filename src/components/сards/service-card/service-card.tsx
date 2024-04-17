import { ComponentPropsWithoutRef, FC } from 'react'

import { TypographyVariant } from '@/common'
import { Typography } from '@/components'

import s from './service-card.module.scss'

export type ServiceCardProps = {
  icon: string
  iconBg?: 'orange' | 'purple'
  text?: string
  title: string
} & ComponentPropsWithoutRef<'article'>

export const ServiceCard: FC<ServiceCardProps> = ({
  className,
  icon,
  iconBg = 'purple',
  text,
  title,
}) => {
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
