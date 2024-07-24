import { Helmet } from 'react-helmet'

type Props = {
  description: string
  favicon?: '/favicons/favicon.svg'
  title: string
}
export const CustomHead = ({ description, favicon, title }: Props) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta content={title} property={'og:title'} />
      <meta content={title} property={'og:site_name'} />
      <meta content={description} property={'og:description'} />
      <meta content={favicon && favicon} property={'og:image'} />
      <meta content={description} name={'description'} />
    </Helmet>
  )
}
