import { SectionNavigation, ServiceCard, Typography } from '@/components'

import s from './help-make-services.module.scss'

import { dataServices } from './data'

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
        <SectionNavigation />
      </div>
    </div>
  )
}
