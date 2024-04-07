import { TariffCard, TariffType } from '@/components'

const tariffData: TariffType[] = [
  {
    items: [
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
    ],
    pay: '$3000/month',
    text: 'If you choose the Starter Boost plan your advertising shows:',
    title: 'Starter Boost',
    type: 'exclusive',
  },
  {
    gallery: [
      {
        alt: '1',
        avif: '/assets/images/people.avif',
        src: '/assets/images/people.jpg',
        webp: '/assets/images/people.webg',
      },
      {
        alt: '1',
        avif: '/assets/images/people.avif',
        src: '/assets/images/people.jpg',
        webp: '/assets/images/people.webg',
      },
      {
        alt: '1',
        avif: '/assets/images/people.avif',
        src: '/assets/images/people.jpg',
        webp: '/assets/images/people.webg',
      },
      {
        alt: '1',
        avif: '/assets/images/people.avif',
        src: '/assets/images/people.jpg',
        webp: '/assets/images/people.webg',
      },
      {
        alt: '1',
        avif: '/assets/images/people.avif',
        src: '/assets/images/people.jpg',
        webp: '/assets/images/people.webg',
      },
      {
        alt: '1',
        avif: '/assets/images/people.avif',
        src: '/assets/images/people.jpg',
        webp: '/assets/images/people.webg',
      },
    ],
    items: [
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
    ],
    pay: '$3000/month',
    text: 'If you choose the Starter Boost plan your advertising shows:',
    title: 'Starter Boost',
    type: 'exclusive',
  },
]

export function App() {
  return (
    <div className={'wrapper'}>
      <ul style={{ display: 'flex', gap: '40px' }}>
        {tariffData.map((item, index) => (
          <li key={index} style={{ width: '600px' }}>
            <TariffCard
              gallery={item.gallery}
              items={item.items}
              pay={item.pay}
              text={item.text}
              title={item.title}
              type={item.type}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}
