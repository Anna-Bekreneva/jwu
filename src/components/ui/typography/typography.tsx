import {
  ComponentPropsWithoutRef,
  ElementRef,
  ElementType,
  ForwardedRef,
  forwardRef,
  memo,
} from 'react'

import { TypographyVariant } from '@/common'
import { AnimatePresence, motion } from 'framer-motion'

import s from './typography.module.scss'

type Props<T> = {
  as?: T
  isLine?: boolean
  partLineFromText?: number
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
    partLineFromText = 3,
    variant = TypographyVariant.body1,
    ...rest
  } = props

  const typographyClassName = `${isLine && s.line} ${s[String(variant)]} ${className}`

  const icon = {
    hidden: {
      pathLength: 0,
      stroke: 'transparent',
    },
    visible: {
      pathLength: 1,
      stroke: '#FFA522',
    },
  }

  return (
    // @ts-expect-error TS2322
    <Tag className={typographyClassName} ref={ref} {...rest}>
      {children}
      {isLine && (
        <AnimatePresence>
          <svg
            fill={'none'}
            height={'16'}
            viewBox={'0 0 441 16'}
            width={'441'}
            xmlns={'http://www.w3.org/2000/svg'}
          >
            <motion.path
              animate={'visible'}
              d={'M3.57121 12.3108C48.2426 9.17873 280.19 -4.61392 437.74 10.1501'}
              initial={icon.hidden}
              strokeLinecap={'round'}
              strokeWidth={'6'}
              transition={{
                duration: 1,
                ease: 'linear',
              }}
              viewport={{ amount: 0.4, once: true }}
              whileInView={icon.visible}
            />
          </svg>
        </AnimatePresence>
      )}
    </Tag>
  )
}

export const Typography = memo(
  forwardRef(TypographyPolymorph) as <T extends ElementType = 'p'>(
    props: Props<T> &
      Omit<ComponentPropsWithoutRef<T>, keyof Props<T>> & {
        ref?: ForwardedRef<ElementRef<T>>
      }
  ) => ReturnType<typeof TypographyPolymorph>
)
