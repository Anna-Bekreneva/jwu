import { memo } from 'react'

import { Accordion, AccordionContent, AccordionHeader, AccordionItem } from '@/components'

import s from './questions-accordion.module.scss'
import {QuestionType} from "../../model";

type Props = {
  items: QuestionType[]
}

export const QuestionsAccordion = memo(({ items }: Props) => {
  return (
    <Accordion className={s.list} type={'multiple'}>
      {items.map(item => (
        <AccordionItem key={item.id} value={item.id}>
          <AccordionHeader> {item.title} </AccordionHeader>
          <AccordionContent> {item.content} </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
})
