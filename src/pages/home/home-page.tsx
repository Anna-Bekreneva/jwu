import { FC } from 'react'

import { Footer, Header } from '@/components'
import { HelpMake, Hero, Videos } from '@/pages'

export const HomePage: FC = () => {
  return (
    <div className={'wrapper'}>
      <Header />
      <main>
        <Hero />
        <Videos />
        <HelpMake />
      </main>
      <Footer />
    </div>
  )
}
