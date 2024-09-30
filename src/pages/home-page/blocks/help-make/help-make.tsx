import s from './help-make.module.scss'

import { HelpMakeServices } from './help-make-services/help-make-services'
import { HelpMakeSwiper } from './help-make-swiper/help-make-swiper'
import { HelpMakeTop } from './help-make-top/help-make-top'

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
