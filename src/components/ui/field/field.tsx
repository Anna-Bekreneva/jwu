import { ComponentPropsWithoutRef, ElementType } from 'react'

import { TypographyVariant } from '@/common'
import { Typography } from '@/components'

import s from './field.module.scss'

type Props<T extends ElementType> = {
  as?: T
  errorMessage?: string
  label?: string
  onValueChange?: (value: string) => void
}

export type FieldProps<T extends ElementType> = Props<T> &
  Omit<ComponentPropsWithoutRef<T>, keyof Props<T>>
export const Field = <T extends ElementType = 'input'>(
  props: FieldProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof FieldProps<T>>
) => {
  const { as: Tag = 'input', errorMessage, id, label, onValueChange, ...rest } = props

  return (
    <div className={s.box}>
      {label && id && (
        <Typography
          as={'label'}
          className={s.label}
          htmlFor={id}
          variant={TypographyVariant.caption2}
        >
          {label}
        </Typography>
      )}
      <Tag
        className={`${s.field} ${Tag === 'textarea' && s.textarea}`}
        id={id}
        onChange={e => onValueChange?.(e.currentTarget.value)}
        {...rest}
      />
      {errorMessage && (
        <Typography className={s.errorMessage} variant={TypographyVariant.caption1}>
          {errorMessage}
        </Typography>
      )}
    </div>
  )
}
