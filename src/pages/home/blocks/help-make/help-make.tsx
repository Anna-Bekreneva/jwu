import { HelpMakeServices, HelpMakeSwiper, HelpMakeTop } from '@/pages'

import s from './help-make.module.scss'

export const HelpMake = () => {
  return (
    <section className={`${s.section} section section--bg`} id={'services'}>
      <div className={'container'}>
        <div className={'section__wrapper'}>
          <HelpMakeTop />
          <div className={s.wrapper}>
            <HelpMakeServices />
            <HelpMakeSwiper />
          </div>
        </div>
      </div>
    </section>
  )
}
