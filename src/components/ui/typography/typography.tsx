import { ComponentPropsWithoutRef, ElementType } from 'react'

import { TypographyVariant } from '@/common'
import { useTypography } from '@/components'

import s from './typography.module.scss'

type Props<T> = {
  as?: T
  isLine?: boolean
  variant?: keyof typeof TypographyVariant
}
export const Typography = <T extends ElementType = 'p'>(
  props: Props<T> & Omit<ComponentPropsWithoutRef<T>, keyof Props<T>>
) => {
  const {
    as: Tag = 'p',
    children,
    className,
    isLine,
    variant = TypographyVariant.body1,
    ...rest
  } = props

  const typographyClassName = `${isLine && s.line} ${s[String(variant)]} ${className}`

  const { path, svgWidth, typographyRef } = useTypography()

  return (
    // @ts-expect-error TS2322
    <Tag className={typographyClassName} ref={typographyRef} {...rest}>
      {children}
      {isLine && (
        <svg height={30} viewBox={`0 0 ${svgWidth} 32`} width={svgWidth}>
          <path d={path} fill={'none'} strokeLinecap={'round'} strokeWidth={6} />
        </svg>
      )}
    </Tag>
  )
}
