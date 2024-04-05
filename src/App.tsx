import { TariffCard } from '@/components'

export function App() {
  return (
    <div className={'wrapper'}>
      <TariffCard
        items={[
          {
            id: '2',
            name: 'each 10 min',
            value: '60 sec',
          },
          {
            hint:
              'If you choose the Starter Boost plan your advertising shows:\n' +
              'You are given 60 sec in a 10-min long ad block. The recommended video length is up to 15 sec',
            id: '1',
            name: 'each 10 min',
            value: '60 sec',
          },
          {
            id: '3',
            name: 'each 10 min',
            value: '60 sec',
          },
        ]}
        pay={'$3000/month'}
        text={'If you choose the Starter Boost plan your advertising shows:'}
        title={'Starter Boost'}
      />
    </div>
  )
}
