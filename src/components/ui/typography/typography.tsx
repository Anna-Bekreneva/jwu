import { ComponentPropsWithoutRef, ElementRef, ElementType, ForwardedRef, forwardRef } from 'react'

import { TypographyVariant } from '@/common'

import s from './typography.module.scss'

type Props<T> = {
  as?: T
  isLine?: boolean
  variant?: keyof typeof TypographyVariant
}
const TypographyPolymorph = <T extends ElementType = 'p'>(
  props: Props<T> & Omit<ComponentPropsWithoutRef<T>, keyof Props<T>>,
  ref: ElementRef<T>
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

  const svgWidth = 500 // Замените это значением ширины вашего SVG
  const svgHeight = 50 // Замените это значением высоты вашего SVG

  const startX = 0
  const startY = 15 //96
  const control1X = svgWidth * 0.25
  const control1Y = 0 //81
  const control2X = svgWidth * 0.5
  const control2Y = 9 //90
  const endX = svgWidth
  const endY = 19 //99

  const pathD = `M${startX},${startY} C${control1X},${control1Y} ${control2X},${control2Y} ${endX},${endY}`

  return (
    // @ts-expect-error TS2322
    <Tag className={typographyClassName} ref={ref} {...rest}>
      {children}
      {isLine && (
        <svg height={svgHeight} width={svgWidth}>
          <path d={pathD} fill={'none'} strokeLinecap={'round'} strokeWidth={6} />
        </svg>
      )}
    </Tag>
  )
}

export const Typography = forwardRef(TypographyPolymorph) as <T extends ElementType = 'button'>(
  props: Props<T> & Omit<ComponentPropsWithoutRef<T>, keyof Props<T>>,
  ref?: ForwardedRef<ElementRef<T>>
) => ReturnType<typeof TypographyPolymorph>
