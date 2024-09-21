import {CustomHead, Layout} from '@/components'
import {Contacts, HelpMake, Hero, Instagram, Prices, QuestionBlock, Reviews, Statistics, Videos} from '@/pages'

export const HomePage = () => {
  return (
    <>
      <CustomHead
        description={'We offer mobile billboards in NY for your business and events'}
        title={'Home page | JWU'}
      />
      <Layout>
        <main>
          <Hero/>
          <Videos/>
          <HelpMake/>
          <Statistics/>
          <Reviews/>
          <Prices/>
          <QuestionBlock/>
          <Contacts/>
          <Instagram/>
        </main>
      </Layout>
    </>
  )
}

