import { ChangeEvent, ComponentPropsWithoutRef, ElementType, forwardRef, useId } from 'react'

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

  const randomId = useId()
  const actualId = id ?? randomId
  const idField = `${actualId}-field`
  const idError = `${actualId}-error`

  const changeHandler = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    onValueChange?.(e.currentTarget.value)

  return (
    <div className={s.box} ref={ref}>
      {label && (
        <Typography
          as={'label'}
          className={s.label}
          htmlFor={idField}
          variant={TypographyVariant.caption2}
        >
          {label}
        </Typography>
      )}
      <Tag
        aria-describedby={errorMessage ? idError : undefined}
        aria-invalid={!!errorMessage}
        className={`${s.field} ${Tag === 'textarea' ? s.textarea : ''} ${
          errorMessage ? s.error : ''
        }`}
        id={idField}
        onChange={changeHandler}
        {...rest}
      />
      {errorMessage && (
        <Typography
          aria-live={'assertive'}
          className={s.errorMessage}
          id={idError}
          variant={TypographyVariant.caption1}
        >
          {errorMessage}
        </Typography>
      )}
    </div>
  )
})
