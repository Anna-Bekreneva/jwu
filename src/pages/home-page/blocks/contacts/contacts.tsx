import { TypographyVariant } from '@/common'
import { Form, Typography } from '@/components'

import s from './contacts.module.scss'

export const Contacts = () => {
  return (
    <section className={'section'} id={'contacts'}>
      <div className={`container container--large`}>
        <div className={`section__top ${s.top}`}>
          <Typography as={'h2'} isLine variant={TypographyVariant.title1}>
            Feel free to contact with&nbsp;us!
          </Typography>
        </div>
        <h2 className={'sr-only'}>Contacts</h2>
        <div className={s.wrapper}>
          <div className={s.formWrapper}>
            <Form className={s.form} />
          </div>
          <span
            className={s.map}
            style={{ backgroundImage: 'url(./assets/images/contacts/map.jpg)' }}
          />
        </div>
      </div>
    </section>
  )
}
