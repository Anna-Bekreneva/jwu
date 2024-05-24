import { ComponentPropsWithoutRef } from 'react'

import { TypographyVariant } from '@/common'
import { Typography } from '@/components'
import * as TabsRadix from '@radix-ui/react-tabs'
import { TabsContentProps, TabsListProps, TabsProps } from '@radix-ui/react-tabs'

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
export const TabsTrigger = ({ value, ...props }: TabsTriggerPropsType) => {
  return (
    <TabsRadix.Trigger asChild className={s.button} value={value}>
      <Typography
        as={'button'}
        isLine
        partLineFromText={1}
        type={'button'}
        variant={TypographyVariant.title2}
        {...props}
      />
    </TabsRadix.Trigger>
  )
}

export const TabsContent = ({ className, value, ...props }: TabsContentProps) => {
  return <TabsRadix.Content className={`${s.content} ${className}`} value={value} {...props} />
}
