import { TariffCard } from '@/components'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  argTypes: {},
  component: TariffCard,
  tags: ['autodocs'],
  title: 'Components/Cards/Tariff-card',
} satisfies Meta<typeof TariffCard>

export default meta
type Story = StoryObj<typeof meta>

export const StandardTariffCard: Story = {
  args: {
    items: [
      {
        id: '2',
        name: 'each 10 min',
        value: '60 sec',
      },
      {
        hint:
          'If you choose the Starter Boost plan your advertising shows:\n' +
          'You are given 60 sec in&nbsp;a&nbsp;10-min long ad&nbsp;block. The recommended video length is&nbsp;up&nbsp;to&nbsp;15 sec',
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
  },
}

export const ExclusiveTariffCard: Story = {
  render: () => {
    const args = {
      additionalText:
        'Event rental is available for a minimum of two hours, while other terms are discussed individually',
      fancyboxName: 'test2',
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
    }

    return (
      <div style={{ maxWidth: '600px' }}>
        <TariffCard {...args} type={'exclusive'}></TariffCard>
      </div>
    )
  },
}
