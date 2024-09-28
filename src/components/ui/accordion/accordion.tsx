import { TypographyVariant } from '@/common'
import { Typography } from '@/components'
import * as AccordionRadix from '@radix-ui/react-accordion'
import {
  AccordionContentProps,
  AccordionHeaderProps,
  AccordionItemProps,
  AccordionMultipleProps,
  AccordionSingleProps,
} from '@radix-ui/react-accordion'
import { JSX } from 'react/jsx-runtime'

import s from './accordion.module.scss'

type AccordionPropsType = {
  className?: string
} & (AccordionMultipleProps | AccordionSingleProps)

export const Accordion = ({ className, ...rest }: AccordionPropsType): JSX.Element => {
  return <AccordionRadix.Root className={className} {...rest} />
}

type AccordionItemPropsType = {
  className?: string
} & AccordionItemProps
export const AccordionItem = ({ className, value, ...rest }: AccordionItemPropsType) => {
  return <AccordionRadix.Item className={`${s.item} ${className}`} value={value} {...rest} />
}

type AccordionHeaderPropsType = {
  className?: string
} & AccordionHeaderProps
export const AccordionHeader = ({ children, className, ...rest }: AccordionHeaderPropsType) => {
  return (
    <AccordionRadix.Header className={className} {...rest}>
      <AccordionRadix.Trigger asChild>
        <Typography as={'button'} className={s.trigger} variant={TypographyVariant.subtitle}>
          <Typography as={'span'} className={s.triggerText}>{children}</Typography>
        </Typography>
      </AccordionRadix.Trigger>
    </AccordionRadix.Header>
  )
}

type AccordionContentPropsType = {
  className?: string
} & AccordionContentProps
export const AccordionContent = ({ children, className, ...rest }: AccordionContentPropsType) => {
  return (
    <AccordionRadix.Content className={`${s.content} ${className}`} {...rest}>
      <div className={s.box}>{children}</div>
    </AccordionRadix.Content>
  )
}
