import { memo, useState } from 'react'

import sprite from '@/assets/icons/sprite.svg'
import { TypographyVariant } from '@/common'
import {
  Button,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  TariffCard,
  TariffType,
  Typography,
} from '@/components'

import s from './prices.module.scss'

const TabsVariant = {
  exclusive: 'exclusive',
  standart: 'standart',
} as const

type TabsValueType = (typeof TabsVariant)[keyof typeof TabsVariant]

const tariffData: TariffType[] = [
  {
    items: [
      {
        hint: 'You are given 15 sec in\u00A0a\u00A010-min long ad\u00A0block. The recommended video length is\u00A0up\u00A0to\u00A015 sec',
        id: 'starter-1',
        name: 'each 10 min',
        value: '15 sec',
      },
      {
        id: 'starter-2',
        name: 'per hour',
        value: '6 times',
      },
      {
        id: 'starter-3',
        name: 'per day',
        value: '48 times',
      },
    ],
    pay: '$3000/month',
    text: 'If you choose the Starter Boost plan your advertising shows:',
    title: 'Starter Boost',
    type: 'standard',
  },
  {
    items: [
      {
        hint: 'You are given 30 sec in\u00A0a\u00A010-min long ad\u00A0block. The recommended video length is\u00A0up\u00A0to\u00A015 sec',
        id: 'performance-1',
        name: 'each 10 min',
        value: '30 sec',
      },
      {
        id: 'performance-2',
        name: 'per hour',
        value: '12 times',
      },
      {
        id: 'performance-3',
        name: 'per day',
        value: '96 times',
      },
    ],
    pay: '$4000/month',
    text: 'If you choose the Performance Pro plan your advertising shows:',
    title: 'Performance pro',
    type: 'standard',
  },
  {
    items: [
      {
        hint: 'You are given 45 sec in\u00A0a\u00A010-min long ad\u00A0block. The recommended video length is\u00A0up\u00A0to\u00A015 sec',
        id: 'elite-1',
        name: 'each 10 min',
        value: '45 sec',
      },
      {
        id: 'elite-2',
        name: 'per hour',
        value: '18 times',
      },
      {
        id: 'elite-3',
        name: 'per day',
        value: '144 times',
      },
    ],
    pay: '$5000/month',
    text: 'If you choose the Elite Exposure plan your advertising shows:',
    title: 'Elite Exposure',
    type: 'standard',
  },
  {
    items: [
      {
        hint: 'You are given 60 sec in\u00A0a\u00A010-min long ad\u00A0block. The recommended video length is\u00A0up\u00A0to\u00A015 sec',
        id: 'premium-1',
        name: 'each 10 min',
        value: '60 sec',
      },
      {
        id: 'premium-2',
        name: 'per hour',
        value: '24 times',
      },
      {
        id: 'premium-3',
        name: 'per day',
        value: '192 times',
      },
    ],
    pay: '$6000/month',
    text: 'If you choose the Elite Exposure plan your advertising shows:',
    title: 'premium Impact',
    type: 'standard',
  },
  {
    additionalText:
      'Event rental is available for a minimum of two hours, while other terms are discussed individually',
    gallery: [
      {
        alt: '1',
        basePath: '/assets/images/gallery/air-cinema',
      },
      {
        alt: '2',
        basePath: '/assets/images/gallery/family-home',
      },
      {
        alt: '3',
        basePath: '/assets/images/gallery/friends-selfie',
      },
      {
        alt: '4',
        basePath: '/assets/images/gallery/gender-reveal-party',
      },
    ],
    items: [
      {
        id: 'exclusive-event-1',
        name: '1 day',
        value: '$1000',
      },
      {
        id: 'exclusive-event-2',
        name: '3 days (-10%)',
        value: '$900 /day',
      },
    ],
    pay: '$5000/hour(min 2)',
    text: 'The Exclusive Event is designed specifically for all of\u00A0your events',
    title: 'Exclusive Event',
    type: 'exclusive',
  },
  {
    gallery: [
      {
        alt: '1',
        basePath: '/assets/images/gallery/air-cinema',
      },
      {
        alt: '2',
        basePath: '/assets/images/gallery/family-home',
      },
      {
        alt: '3',
        basePath: '/assets/images/gallery/friends-selfie',
      },
      {
        alt: '4',
        basePath: '/assets/images/gallery/gender-reveal-party',
      },
    ],
    pay: '$30.000/month',
    text: 'The Exclusive Business is the best choice for your personal needs',
    title: 'Exclusive Business',
    type: 'exclusive',
  },
]

export const Prices = memo(() => {
  const [value, setValue] = useState<TabsValueType>(TabsVariant.standart)

  const changeValueHandler = (value: TabsValueType) => setValue(value)

  return (
    <section className={`${s.section} section`}>
      <div className={'container'}>
        <div className={'section__wrapper'}>
          <div className={s.wrapper}>
            <div className={'section__top'}>
              <Typography
                as={'span'}
                className={'section__label'}
                variant={TypographyVariant.caption1}
              >
                Pricing
              </Typography>
              <Typography as={'h2'} isLine variant={TypographyVariant.title1}>
                Jump With Us starting at 500$/hour
              </Typography>
              <Typography>Clear and Simple pricing for your Events&Business</Typography>
            </div>
            <Tabs
              className={s.tabs}
              onValueChange={value => changeValueHandler(value as TabsValueType)}
              value={value}
            >
              <TabsList className={s.tabsList}>
                <Typography
                  as={TabsTrigger}
                  value={TabsVariant.standart}
                  variant={TypographyVariant.title2}
                >
                  Standart
                </Typography>
                <Typography
                  as={TabsTrigger}
                  value={TabsVariant.exclusive}
                  variant={TypographyVariant.title2}
                >
                  Exclusive
                </Typography>
              </TabsList>
              <TabsContent value={TabsVariant.standart}>
                <ul className={s.items}>
                  {tariffData
                    .filter(tariff => tariff.type === 'standard')
                    .map((tariff, index) => {
                      return (
                        <li className={s.item} key={index}>
                          <TariffCard {...tariff} />
                        </li>
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
                        <li className={s.item} key={index}>
                          <TariffCard {...tariff} />
                        </li>
                      )
                    })}
                </ul>
              </TabsContent>
            </Tabs>
            <div className={'section__bottom'}>
              <Typography variant={TypographyVariant.body2}>
                Enjoy 10-20% discounts when buying from 3 months!
              </Typography>
              <div className={'section__buttons'}>
                <Button as={'a'} className={'section__button'} href={'#'}>
                  Contact us
                </Button>
                <Button aria-label={'whatsapp'} as={'a'} href={'#'} isIcon>
                  <svg
                    aria-hidden
                    className={`${s.icon} ${s.iconWhatsapp}`}
                    fill={'#fff'}
                    viewBox={'0 0 24 24'}
                    xmlns={'http://www.w3.org/2000/svg'}
                  >
                    <use xlinkHref={`${sprite}#whatsapp`} />
                  </svg>
                </Button>
                <Button aria-label={'email'} as={'a'} href={'#'} isIcon>
                  <svg
                    aria-hidden
                    className={`${s.icon} ${s.iconEmail}`}
                    fill={'transparent'}
                    stroke={'white'}
                    viewBox={'0 0 24 24'}
                    xmlns={'http://www.w3.org/2000/svg'}
                  >
                    <use xlinkHref={`${sprite}#email`} />
                  </svg>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
})
