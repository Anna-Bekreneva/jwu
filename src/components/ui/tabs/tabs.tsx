import { ComponentPropsWithoutRef, FC } from 'react'

import { TypographyVariant } from '@/common'
import { Typography } from '@/components'
import * as TabsRadix from '@radix-ui/react-tabs'
import { TabsContentProps, TabsListProps, TabsProps } from '@radix-ui/react-tabs'

import s from './tabs.module.scss'

export const Tabs: FC<TabsProps> = ({ onValueChange, value, ...props }) => {
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

export const TabsList: FC<TabsListProps> = ({ className, ...props }) => {
  return <TabsRadix.List className={`${s.list} ${className}`} {...props} />
}

type TabsTriggerPropsType = {
  value: string
} & ComponentPropsWithoutRef<'button'>
export const TabsTrigger: FC<TabsTriggerPropsType> = ({ value, ...props }) => {
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

export const TabsContent: FC<TabsContentProps> = ({ className, value, ...props }) => {
  return <TabsRadix.Content className={`${s.content} ${className}`} value={value} {...props} />
}
