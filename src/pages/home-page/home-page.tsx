import { CustomHead, Footer, Header } from '@/components'
import {
  Contacts,
  HelpMake,
  Hero,
  Instagram,
  Prices,
  QuestionBlock,
  Reviews,
  Statistics,
  Videos,
} from '@/pages'

export const HomePage = () => {
  return (
    <div className={'wrapper'}>
      <CustomHead
        description={'We offer mobile billboards in NY for your business and events'}
        title={'Home page | JWU'}
      />
      <Header />
      <main>
        <Hero />
        <Videos />
        <HelpMake />
        <Statistics />
        <Reviews />
        <Prices />
        <QuestionBlock />
        <Contacts />
        <Instagram />
      </main>
      <Footer />
    </div>
  )
}
