import { PriceBottom, PricesTabs, PricesTop } from '@/pages'

import s from './prices.module.scss'

export const Prices = () => {
  return (
    <section className={`${s.section} section`}>
      <div className={'container'}>
        <div className={'section__wrapper'}>
          <div className={s.wrapper}>
            <PricesTop />
            <PricesTabs />
            <PriceBottom />
          </div>
        </div>
      </div>
    </section>
  )
}
