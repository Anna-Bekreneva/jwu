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

export const StandartTariffCardDefault: Story = {
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
