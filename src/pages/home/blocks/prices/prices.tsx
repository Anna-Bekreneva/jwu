import {memo, useState} from "react";
import {Button, Tabs, TabsContent, TabsList, TabsTrigger, TariffCard, TariffType, Typography} from "@/components";
import {TypographyVariant} from "@/common";

import s from './prices.module.scss'
import sprite from "@/assets/icons/sprite.svg";

const TabsVariant = {
  standart: 'standart',
  exclusive: 'exclusive',
} as const

type TabsValueType = (typeof TabsVariant)[keyof typeof TabsVariant]

const tariffData: TariffType[] = [
  {
    type: 'standard',
    text: 'If you choose the Starter Boost plan your advertising shows:',
    title: 'Starter Boost',
    items: [{
      id: 'starter-1',
      value: '15 sec',
      name: 'each 10 min',
      hint: 'You are given 15 sec in\u00A0a\u00A010-min long ad\u00A0block. The recommended video length is\u00A0up\u00A0to\u00A015 sec',
    },
      {
        id: 'starter-2',
        value: '6 times',
        name: 'per hour',
      },
      {
        id: 'starter-3',
        value: '48 times',
        name: 'per day',
      },
    ],
    pay: '$3000/month'
  },
  {
    type: 'standard',
    text: 'If you choose the Performance Pro plan your advertising shows:',
    title: 'Performance pro',
    items: [{
      id: 'performance-1',
      value: '30 sec',
      name: 'each 10 min',
      hint: 'You are given 30 sec in\u00A0a\u00A010-min long ad\u00A0block. The recommended video length is\u00A0up\u00A0to\u00A015 sec',
    },
      {
        id: 'performance-2',
        value: '12 times',
        name: 'per hour',
      },
      {
        id: 'performance-3',
        value: '96 times',
        name: 'per day',
      },
    ],
    pay: '$4000/month'
  },
  {
    type: 'standard',
    text: 'If you choose the Elite Exposure plan your advertising shows:',
    title: 'Elite Exposure',
    items: [{
      id: 'elite-1',
      value: '45 sec',
      name: 'each 10 min',
      hint: 'You are given 45 sec in\u00A0a\u00A010-min long ad\u00A0block. The recommended video length is\u00A0up\u00A0to\u00A015 sec',
    },
      {
        id: 'elite-2',
        value: '18 times',
        name: 'per hour',
      },
      {
        id: 'elite-3',
        value: '144 times',
        name: 'per day',
      },
    ],
    pay: '$5000/month'
  },
  {
    type: 'standard',
    text: 'If you choose the Elite Exposure plan your advertising shows:',
    title: 'premium Impact',
    items: [{
      id: 'premium-1',
      value: '60 sec',
      name: 'each 10 min',
      hint: 'You are given 60 sec in\u00A0a\u00A010-min long ad\u00A0block. The recommended video length is\u00A0up\u00A0to\u00A015 sec',
    },
      {
        id: 'premium-2',
        value: '24 times',
        name: 'per hour',
      },
      {
        id: 'premium-3',
        value: '192 times',
        name: 'per day',
      },
    ],
    pay: '$6000/month'
  },
  {
    type: 'exclusive',
    text: 'The Exclusive Event is designed specifically for all of\u00A0your events',
    additionalText: 'Event rental is available for a minimum of two hours, while other terms are discussed individually',
    title: 'Exclusive Event',
    gallery: [
      {
        alt: '1',
        basePath: '/assets/images/gallery/air-cinema'
      },
      {
        alt: '2',
        basePath: '/assets/images/gallery/family-home'
      },
      {
        alt: '3',
        basePath: '/assets/images/gallery/friends-selfie'
      },
      {
        alt: '4',
        basePath: '/assets/images/gallery/gender-reveal-party'
      }
    ],
    items: [{
      id: 'exclusive-event-1',
      value: '$1000',
      name: '1 day',
    },
      {
        id: 'exclusive-event-2',
        value: '$900 /day',
        name: '3 days (-10%)',
      },
    ],
    pay: '$5000/hour(min 2)'
  },
  {
    type: 'exclusive',
    text: 'The Exclusive Business is the best choice for your personal needs',
    title: 'Exclusive Business',
    gallery: [
      {
        alt: '1',
        basePath: '/assets/images/gallery/air-cinema'
      },
      {
        alt: '2',
        basePath: '/assets/images/gallery/family-home'
      },
      {
        alt: '3',
        basePath: '/assets/images/gallery/friends-selfie'
      },
      {
        alt: '4',
        basePath: '/assets/images/gallery/gender-reveal-party'
      }
    ],
    pay: '$30.000/month'
  }
]
export const Prices = memo(() => {
  const [value, setValue] = useState<TabsValueType>(TabsVariant.standart)

  const changeValueHandler = (value: TabsValueType) => setValue(value)

  return (
    <section className={`${s.section} section section--bg`}>
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
              <Typography>
                Clear and Simple pricing for your Events&Business
              </Typography>
            </div>
            <Tabs className={s.tabs} onValueChange={value => changeValueHandler(value as TabsValueType)} value={value}>
              <TabsList className={s.tabsList}>
                <Typography
                  as={TabsTrigger}
                  variant={TypographyVariant.title2}
                  value={TabsVariant.standart}>
                  Standart
                </Typography>
                <Typography
                  as={TabsTrigger}
                  variant={TypographyVariant.title2}
                  value={TabsVariant.exclusive}>
                  Exclusive
                </Typography>
              </TabsList>
              <TabsContent value={TabsVariant.standart}>
                <ul className={s.items}>
                  {tariffData.filter((tariff) => tariff.type === 'standard').map((tariff, index) => {
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
                  {tariffData.filter((tariff) => tariff.type === 'exclusive').map((tariff, index) => {
                    return (
                      <li className={s.item} key={index}>
                        <TariffCard {...tariff}/>
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
                    viewBox={'0 0 24 24'}
                    xmlns={'http://www.w3.org/2000/svg'}
                    fill={'#fff'}
                  >
                    <use xlinkHref={`${sprite}#whatsapp`} />
                  </svg>
                </Button>
                <Button aria-label={'email'} as={'a'} href={'#'} isIcon>
                  <svg
                    aria-hidden
                    className={`${s.icon} ${s.iconEmail}`}
                    stroke={'white'}
                    fill={'transparent'}
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