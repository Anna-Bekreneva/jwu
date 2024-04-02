import { FC } from 'react'

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

export const Accordion: FC<AccordionPropsType> = ({ className, ...rest }): JSX.Element => {
  return <AccordionRadix.Root className={className} {...rest} />
}

type AccordionItemPropsType = {
  className?: string
} & AccordionItemProps
export const AccordionItem: FC<AccordionItemPropsType> = ({ className, value, ...rest }) => {
  return <AccordionRadix.Item className={`${s.item} ${className}`} value={value} {...rest} />
}

type AccordionHeaderPropsType = {
  className?: string
} & AccordionHeaderProps
export const AccordionHeader: FC<AccordionHeaderPropsType> = ({ children, className, ...rest }) => {
  return (
    <AccordionRadix.Header className={className} {...rest}>
      <AccordionRadix.Trigger asChild>
        <Typography as={'span'} className={s.trigger} variant={TypographyVariant.subtitle}>
          {children}
        </Typography>
      </AccordionRadix.Trigger>
    </AccordionRadix.Header>
  )
}

type AccordionContentPropsType = {
  className?: string
} & AccordionContentProps
export const AccordionContent: FC<AccordionContentPropsType> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <AccordionRadix.Content className={`${s.content} ${className}`} {...rest}>
      {children}
    </AccordionRadix.Content>
  )
}
