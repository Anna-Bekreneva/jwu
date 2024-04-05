import { ServiceCard } from '@/components'

export function App() {
  return (
    <div className={'wrapper'}>
      <ServiceCard
        icon={'mobile-bilboards'}
        iconBg={'purple'}
        text={<p>Advertising on mobile billboards for your business </p>}
        title={'Test'}
      ></ServiceCard>
    </div>
  )
}
