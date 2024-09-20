import {Header, Footer} from "@/components";
import {ReactNode} from "react";

type Props = {
  children: ReactNode
}
export const Layout = ({children}: Props) => {
  return (
    <div className={'wrapper'}>
      <Header/>
      {children}
      <Footer/>
    </div>
  )
}