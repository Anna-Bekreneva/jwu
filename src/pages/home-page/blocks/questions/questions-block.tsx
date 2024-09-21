import { QuestionsTop } from './ui/questions-top/questions-top'
import s from './questions-block.module.scss'
import {QuestionsAccordion} from "./ui/questions-accordion/questions-accordion";
import { questions } from './model/questions-data';

export const QuestionBlock = () => {
  const leftCount = Math.floor(questions.length / 2)
  const leftItems = [...questions].splice(0, leftCount)
  const rightItems = [...questions].splice(leftCount)

  return (
    <section className={`section section--bg`} id={'faq'}>
      <div className={'container'}>
        <div className={'section__wrapper'}>
          <QuestionsTop />
          <div className={s.wrapper}>
            <QuestionsAccordion items={leftItems} />
            <QuestionsAccordion items={rightItems} />
          </div>
        </div>
      </div>
    </section>
  )
}
