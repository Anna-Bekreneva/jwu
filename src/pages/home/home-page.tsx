import { FC } from 'react'

import { Footer, Header } from '@/components'
import { Hero, Videos } from '@/pages'

export const HomePage: FC = () => {
  return (
    <div className={'wrapper'}>
      <Header />
      <main>
        <Hero />
        <Videos />
      </main>
      <Footer />
    </div>
  )
}
