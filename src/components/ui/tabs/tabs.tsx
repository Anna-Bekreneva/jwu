import { ComponentPropsWithoutRef } from 'react'

import { TypographyVariant } from '@/common'
import { Typography } from '@/components'
import * as TabsRadix from '@radix-ui/react-tabs'
import { TabsContentProps, TabsListProps, TabsProps } from '@radix-ui/react-tabs'
import { AnimatePresence } from 'framer-motion'

import s from './tabs.module.scss'

export const Tabs = ({ onValueChange, value, ...props }: TabsProps) => {
  return (
    <TabsRadix.Root
      className={s.root}
      onValueChange={value => {
        onValueChange?.(value)
      }}
      value={value}
      {...props}
    />
  )
}

export const TabsList = ({ className, ...props }: TabsListProps) => {
  return <TabsRadix.List className={`${s.list} ${className}`} {...props} />
}

type TabsTriggerPropsType = {
  value: string
} & ComponentPropsWithoutRef<'button'>
export const TabsTrigger = ({ children, value, ...props }: TabsTriggerPropsType) => {
  return (
    <TabsRadix.Trigger asChild className={s.trigger} value={value}>
      <Typography as={'button'} type={'button'} variant={TypographyVariant.title2} {...props}>
        {children}
        <svg
          aria-hidden
          fill={'none'}
          height={'6'}
          viewBox={'0 0 133 6'}
          width={'133'}
          xmlns={'http://www.w3.org/2000/svg'}
        >
          <path
            d={'M1.51599 3.78912C14.8789 3.04577 84.2609 -0.258914 131.367 2.91914'}
            stroke={'#FFA522'}
            strokeLinecap={'round'}
            strokeWidth={'3'}
          />
        </svg>
      </Typography>
    </TabsRadix.Trigger>
  )
}

export const TabsContent = ({ children, className, value, ...props }: TabsContentProps) => {
  return (
    <AnimatePresence>
      <TabsRadix.Content className={`${s.content} ${className}`} value={value} {...props}>
        {children}
      </TabsRadix.Content>
    </AnimatePresence>
  )
}
