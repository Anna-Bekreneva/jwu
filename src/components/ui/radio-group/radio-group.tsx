import {ElementRef, forwardRef, ReactNode} from 'react'

import {TypographyVariant} from '@/common'
import {Typography} from '@/components'
import * as RadixRadioGroup from '@radix-ui/react-radio-group'
import {RadioGroupItemProps, RadioGroupProps} from '@radix-ui/react-radio-group'

import s from './radio-group.module.scss'

export type CustomRadioGroupProps = RadioGroupProps & {
  children: ReactNode
  className?: string
  errorMessage?: string
}

export const RadioGroup = forwardRef<ElementRef<typeof RadixRadioGroup.Root>, CustomRadioGroupProps>((props, ref) => {
  const {
    children,
    className,
    errorMessage,
    ...rest
  } = props

  return (
    <RadixRadioGroup.Root className={`${s.root} ${className}`} {...rest} ref={ref}>
      {children}
      {errorMessage && (
        <Typography className={s.errorMessage} variant={TypographyVariant.caption2}>
          {errorMessage}
        </Typography>
      )}
    </RadixRadioGroup.Root>
  )
})

type RadioItemProps = {
  label: string
} & Omit<RadioGroupItemProps, 'id'>

export const RadioItem = ({disabled, label, value, ...props}: RadioItemProps) => {
  const innerClassName = `${s.inner} ${disabled ? s.disabled : ''}`

  return (
    <div className={innerClassName}>
      <RadixRadioGroup.Item disabled={disabled} id={value} value={value} {...props} />
      <Typography
        as={'label'}
        className={s.name}
        htmlFor={value}
        variant={TypographyVariant.caption1}
      >
        {label}
      </Typography>
    </div>
  )
}
