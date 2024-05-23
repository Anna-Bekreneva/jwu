import { ButtonVariant } from '@/common'
import { Button, ServiceCard, ServiceCardProps, Typography } from '@/components'

import s from './help-make-services.module.scss'

const dataServices: ServiceCardProps[] = [
  {
    icon: 'mobile-bilboards',
    text: 'Advertising on\u00A0mobile billboards for your business',
    title: 'Mobile Billboards',
  },
  {
    icon: 'wedding',
    iconBg: 'orange',
    text: 'Weddings, anniversaries, dinners and engagements',
    title: 'Wedding Events',
  },
  {
    icon: 'community',
    text: 'Movie nights, parades, or\u00A0anything else',
    title: 'Community Events',
  },
  {
    icon: 'grand-openings',
    iconBg: 'orange',
    text: 'For your shops, restaurants, clubs, or\u00A0anything else',
    title: 'Grand Openings',
  },
  {
    icon: 'corporate',
    iconBg: 'orange',
    text: 'Corporate event, team building,  work and\u00A0career-related event',
    title: 'Corporate Outings',
  },
  {
    icon: 'parties',
    text: 'Baby’s\u00A0birthdays, graduations or\u00A0any party for your child',
    title: 'Baby Shower, Gender parties',
  },
  {
    icon: 'parties',
    iconBg: 'orange',
    text: 'Сonferences, school dances, graduations or\u00A0anything else',
    title: 'Proms, School Events',
  },
  {
    icon: 'anniversaries',
    text: 'Birthdays, Christmas, Halloween, New Year, or\u00A0anything else',
    title: 'Anniversaries, Happy b-days',
  },
]

export const HelpMakeServices = () => {
  return (
    <div className={s.info}>
      <ul className={s.items}>
        {dataServices.map((item, index) => (
          <li className={s.item} key={index}>
            <ServiceCard
              className={s.serviceCard}
              icon={item.icon}
              iconBg={item.iconBg}
              text={item.text}
              title={item.title}
            />
          </li>
        ))}
      </ul>
      <div className={`${s.bottom} section__bottom`}>
        <Typography className={s.subtext}>
          We will be happy to help make any&nbsp;of&nbsp;your&nbsp;events memorable
        </Typography>
        <div className={'section__buttons'}>
          <Button as={'a'} className={'section__button'} href={'#'}>
            get a free consultation
          </Button>
          <Button
            as={'a'}
            className={'section__button'}
            href={'#'}
            variant={ButtonVariant.secondary}
          >
            See prices
          </Button>
        </div>
      </div>
    </div>
  )
}
