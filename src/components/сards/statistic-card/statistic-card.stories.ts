import {StatisticCard} from "@/components";
import {Meta, StoryObj} from "@storybook/react";

const meta = {
  argTypes: {
    text: { control: { type: 'text' }},
    numbers: { control: { type: 'text' }},
  },
  component: StatisticCard,
  tags: ['autodocs'],
  title: 'Components/Cards/Statistic-card',
} satisfies Meta<typeof StatisticCard>

export default meta
type Story = StoryObj<typeof meta>

export const StatisticCardDefault: Story = {
  args: {
    text: 'of people find Mobile Billboards to be effective on brand awareness',
    numbers: '47.7%'
  },
}