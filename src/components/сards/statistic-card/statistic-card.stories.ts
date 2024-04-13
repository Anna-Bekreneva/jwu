import { StatisticCard } from '@/components'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  argTypes: {
    numbers: { control: { type: 'text' } },
    text: { control: { type: 'text' } },
  },
  component: StatisticCard,
  tags: ['autodocs'],
  title: 'Components/Cards/Statistic-card',
} satisfies Meta<typeof StatisticCard>

export default meta
type Story = StoryObj<typeof meta>

export const StatisticCardDefault: Story = {
  args: {
    numbers: '47.7%',
    text: 'of people find Mobile Billboards to be effective on brand awareness',
  },
}
