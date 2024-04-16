import { ComponentPropsWithoutRef, ElementType } from 'react'

import { TypographyVariant } from '@/common'
import { Typography } from '@/components'

import s from './field.module.scss'

type Props<T extends ElementType> = {
  as?: T
  id?: string
  label?: string
  onValueChange: (value: string) => void
}
export const Field = <T extends ElementType = 'input'>(
  props: Props<T> & Omit<ComponentPropsWithoutRef<T>, keyof Props<T>>
) => {
  const { as: Tag = 'input', id, label, onValueChange, ...rest } = props

  return (
    <div className={s.box}>
      {label && (
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
        onChange={e => onValueChange(e.currentTarget.value)}
        {...rest}
      />
      {/*{errorMessage && (*/}
      {/*  <Typography className={s.errorMessage} variant={TypographyVariant.caption}>*/}
      {/*    {errorMessage}*/}
      {/*  </Typography>*/}
      {/*)}*/}
    </div>
  )
}
