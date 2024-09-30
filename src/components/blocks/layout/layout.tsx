import { ReactNode } from 'react'

import { Footer, Header } from '@/components'

type Props = {
  children: ReactNode
}
export const Layout = ({ children }: Props) => {
  return (
    <div className={'wrapper'}>
      <Header />
      {children}
      <Footer />
    </div>
  )
}
