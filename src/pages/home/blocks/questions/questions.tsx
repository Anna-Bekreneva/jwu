import { ReactNode, memo } from 'react'

import { TypographyVariant } from '@/common'
import {
  Accordion,
  AccordionContent,
  AccordionHeader,
  AccordionItem,
  Typography,
} from '@/components'

import s from './questions.module.scss'

type QuestionType = {
  content: ReactNode
  id: string
  title: string
}

const questions: QuestionType[] = [
  {
    content: (
      <p>
        Mobile LED Billboards are digital billboards mounted on trucks and driven through busy
        streets in&nbsp;popular city locations. This allows your ads to&nbsp;reach a wider audience
        VS a classic static billboard
      </p>
    ),
    id: '1',
    title: 'How does ads on Mobile LED Billboards work?',
  },
  {
    content: (
      <p>
        We currently operate in NYC, and&nbsp;our&nbsp;Billboard Trucks drive&nbsp;around Manhattan
        and&nbsp;Queens. We also offer an exclusive option — to&nbsp;advertise in specific locations
        within&nbsp;the city
      </p>
    ),
    id: '2',
    title: 'Where my advertisement will\u00A0be\u00A0placed?',
  },
  {
    content: (
      <p>
        Depending on the selected pricing plan, we offer from 48 to 192 shows per day. You&nbsp;also
        get an unlimited shows with&nbsp;our exclusive plan
      </p>
    ),
    id: '3',
    title: 'How often will my video show daily?',
  },
  {
    content: (
      <p>
        We recommend using videos that are no longer than 15 seconds. Short videos allow you to
        convey a&nbsp;key&nbsp;message efficiently, holding attention and increasing the likelihood
        of&nbsp;attracting customers
      </p>
    ),
    id: '4',
    title: 'How long should my video advertisement be?',
  },
  {
    content: (
      <p>
        Yes, you can use music, voiceover or&nbsp;other sound in your video. The&nbsp;sound will
        be&nbsp;played in the places in the city where it is allowed
      </p>
    ),
    id: '5',
    title: 'Can I use sound in my advertisement?',
  },
  {
    content: <p>Don't worry! We will be happy to help you create any promotional materials</p>,
    id: '6',
    title: "What if I don't have a\u00A0video to promote yet?",
  },
  {
    content: (
      <p>
        Yes, you can. We offer an "Exclusive Event" plan for such occasions. Please note that the
        event rental is&nbsp;available for a minimum of 2 hours
      </p>
    ),
    id: '7',
    title: 'Can I rent your Mobile Billboard Truck for an event?',
  },
  {
    content: (
      <>
        <p>
          Yes, of course. For partnerships of three months or longer, we offer a 10% to 20% discount
          on any plan. The lengthier the term, the greater the discount
        </p>
        <p>
          You can also get a discount if you attract new customers. Invite your friends, colleagues,
          and business partners to join us and we will offer favorable conditions for everyone!
        </p>
      </>
    ),
    id: '8',
    title: 'Do you provide any discounts?',
  },
]

export const Questions = memo(() => {
  const leftCount = Math.floor(questions.length / 2)
  const leftItems = [...questions].splice(0, leftCount)
  const rightItems = [...questions].splice(leftCount)

  return (
    <section className={`section section--bg`}>
      <div className={'container'}>
        <div className={'section__wrapper'}>
          <div className={'section__top'}>
            <Typography
              as={'span'}
              className={'section__label'}
              variant={TypographyVariant.caption1}
            >
              FAQs
            </Typography>
            <Typography as={'h2'} isLine variant={TypographyVariant.title1}>
              Some questions you may have
            </Typography>
            <Typography>
              Need help with anything? Here you will find our most frequently asked questions
            </Typography>
          </div>
          <div className={s.wrapper}>
            <AccordionList items={leftItems} />
            <AccordionList items={rightItems} />
          </div>
        </div>
      </div>
    </section>
  )
})

type AccordionListPropsType = {
  items: QuestionType[]
}

const AccordionList = memo(({ items }: AccordionListPropsType) => {
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
