import { ChangeEvent, ComponentPropsWithoutRef, ElementType, forwardRef } from 'react'

import { TypographyVariant } from '@/common'
import { Typography } from '@/components'

import s from './field.module.scss'

export type TextFieldProps<T extends ElementType> = {
  as?: T
  errorMessage?: string
  label?: string
  onValueChange?: (value: string) => void
} & ComponentPropsWithoutRef<T>

export const Field = forwardRef<HTMLDivElement, TextFieldProps<ElementType>>((props, ref) => {
  const { as: Tag = 'input', errorMessage, id, label, onValueChange, ...rest } = props

  const changeHandler = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    onValueChange?.(e.currentTarget.value)

  return (
    <div className={s.box} ref={ref}>
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
        onChange={changeHandler}
        {...rest}
      />
      {errorMessage && (
        <Typography className={s.errorMessage} variant={TypographyVariant.caption1}>
          {errorMessage}
        </Typography>
      )}
    </div>
  )
})
