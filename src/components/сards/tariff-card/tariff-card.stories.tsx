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
        hint: 'You are given 60 sec in&nbsp;a&nbsp;10-min long ad&nbsp;block. The recommended video length is&nbsp;up&nbsp;to&nbsp;15 sec',
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
          basePath: '/assets/images/people',
        },
        {
          alt: '1',
          basePath: '/assets/images/people',
        },
        {
          alt: '1',
          basePath: '/assets/images/people',
        },
        {
          alt: '1',
          basePath: '/assets/images/people',
        },
        {
          alt: '1',
          basePath: '/assets/images/people',
        },
        {
          alt: '1',
          basePath: '/assets/images/people',
        },
        {
          alt: '1',
          basePath: '/assets/images/people',
        },
        {
          alt: '1',
          basePath: '/assets/images/people',
        },
        {
          alt: '1',
          basePath: '/assets/images/people',
        },
        {
          alt: '1',
          basePath: '/assets/images/people',
        },
        {
          alt: '1',
          basePath: '/assets/images/people',
        },
        {
          alt: '1',
          basePath: '/assets/images/people',
        },
      ],
      items: [
        {
          id: '2',
          name: 'each 10 min',
          value: '60 sec',
        },
        {
          hint: 'You are given 60 sec in\u00A0a\u00A010-min long ad\u00A0block. The recommended video length is\u00A0up\u00A0to\u00A015 sec',
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
        <TariffCard {...args} type={'exclusive'}/>
      </div>
    )
  },
}
