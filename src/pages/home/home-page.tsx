import { FC } from 'react'

import { Footer, Header } from '@/components'
import { Hero } from '@/pages'

export const HomePage: FC = () => {
  return (
    <div className={'wrapper'}>
      <Header />
      <main>
        <Hero></Hero>
      </main>
      <Footer />
    </div>
  )
}
