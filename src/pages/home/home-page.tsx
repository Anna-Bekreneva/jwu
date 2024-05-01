import { FC } from 'react'

import { Footer, Header } from '@/components'
import { HelpMake, Hero, Videos } from '@/pages'
import {Statistics} from "@/pages/home/blocks/statistics";
import {Reviews} from "@/pages/home/blocks/reviews";

export const HomePage: FC = () => {
  return (
    <div className={'wrapper'}>
      <Header />
      <main>
        <Hero />
        <Videos />
        <HelpMake />
        <Statistics />
        <Reviews />
      </main>
      <Footer />
    </div>
  )
}
