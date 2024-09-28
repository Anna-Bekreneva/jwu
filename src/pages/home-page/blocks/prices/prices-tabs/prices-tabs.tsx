import { useState } from 'react'

import { Tabs, TabsContent, TabsList, TabsTrigger, TariffCard } from '@/components'
import { motion } from 'framer-motion'

import {tariffData} from "./prices-tabs-data";

import s from './prices-tabs.module.scss'

const TabsVariant = {
  exclusive: 'exclusive',
  standart: 'standart',
} as const

type TabsValueType = (typeof TabsVariant)[keyof typeof TabsVariant]

const cardsVariants = {
  hidden: { opacity: 0, transform: 'translateY(12px)' },
  visible: (i: number) => ({
    opacity: 1,
    transform: 'translateY(0)',
    transition: {
      delay: i * 0.16,
    },
  }),
}

export const PricesTabs = () => {
  const [value, setValue] = useState<TabsValueType>(TabsVariant.exclusive)

  const changeValueHandler = (value: TabsValueType) => setValue(value)

  return (
    <Tabs
      className={s.tabs}
      onValueChange={value => changeValueHandler(value as TabsValueType)}
      value={value}
    >
      <TabsList className={s.tabsList}>
        <TabsTrigger value={TabsVariant.standart}>
          Standart
        </TabsTrigger>
        <TabsTrigger value={TabsVariant.exclusive}>
          Exclusive
        </TabsTrigger>
      </TabsList>
      <TabsContent value={TabsVariant.standart}>
        <ul className={s.items}>
          {tariffData
            .filter(tariff => tariff.type === 'standard')
            .map((tariff, index) => {
              return (
                <motion.div
                  animate={cardsVariants.visible(index)}
                  className={s.itemWrapper}
                  custom={index}
                  initial={cardsVariants.hidden}
                  key={index}
                  variants={cardsVariants}
                >
                  <li className={s.item}>
                    <TariffCard {...tariff} />
                  </li>
                </motion.div>
              )
            })}
        </ul>
      </TabsContent>
      <TabsContent value={TabsVariant.exclusive}>
        <ul className={s.items}>
          {tariffData
            .filter(tariff => tariff.type === 'exclusive')
            .map((tariff, index) => {
              return (
                <motion.div
                  animate={cardsVariants.visible(index)}
                  className={`${s.itemWrapper} ${s.itemWrapperBig}`}
                  custom={index}
                  initial={cardsVariants.hidden}
                  key={index}
                  transition={{ duration: 0.5 }}
                  variants={cardsVariants}
                >
                  <li className={s.item}>
                    <TariffCard {...tariff} />
                  </li>
                </motion.div>
              )
            })}
        </ul>
      </TabsContent>
    </Tabs>
  )
}
