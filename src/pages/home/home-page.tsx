import { Footer, Header } from '@/components'
import {
  Contacts,
  HelpMake,
  Hero,
  Instagram,
  Prices,
  Questions,
  Reviews,
  Statistics,
  Videos,
} from '@/pages'

export const HomePage = () => {
  return (
    <div className={'wrapper'}>
      <Header />
      <main>
        <Hero />
        <Videos />
        <HelpMake />
        <Statistics />
        <Reviews />
        <Prices />
        <Questions />
        <Contacts />
        <Instagram />
      </main>
      <Footer />
    </div>
  )
}
