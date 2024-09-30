import s from './prices.module.scss'

import { PriceBottom } from './price-bottom/price-bottom'
import { PricesTabs } from './prices-tabs/prices-tabs'
import { PricesTop } from './prices-top/prices-top'

export const Prices = () => {
  return (
    <section className={`${s.section} section`} id={'pricing'}>
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
