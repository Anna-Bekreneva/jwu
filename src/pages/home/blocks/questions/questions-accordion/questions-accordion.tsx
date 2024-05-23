import { memo } from 'react'

import { Accordion, AccordionContent, AccordionHeader, AccordionItem } from '@/components'
import { QuestionType } from '@/pages'

import s from '@/pages/home/blocks/questions/questions.module.scss'

type Props = {
  items: QuestionType[]
}

export const QuesionsAccordion = memo(({ items }: Props) => {
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
