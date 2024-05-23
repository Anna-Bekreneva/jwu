import { QuesionsAccordion, questions } from '@/pages'
import { QuestionsTop } from '@/pages/home/blocks/questions/questions-top'

import s from './questions.module.scss'

export const Questions = () => {
  const leftCount = Math.floor(questions.length / 2)
  const leftItems = [...questions].splice(0, leftCount)
  const rightItems = [...questions].splice(leftCount)

  return (
    <section className={`section section--bg`}>
      <div className={'container'}>
        <div className={'section__wrapper'}>
          <QuestionsTop />
          <div className={s.wrapper}>
            <QuesionsAccordion items={leftItems} />
            <QuesionsAccordion items={rightItems} />
          </div>
        </div>
      </div>
    </section>
  )
}
