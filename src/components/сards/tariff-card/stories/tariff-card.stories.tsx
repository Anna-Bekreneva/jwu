import { TariffCard } from '@/components'
import { exclusiveTariffData } from '@/components/сards/tariff-card/stories/exclusive-tariff-data'
import { standardTariffData } from '@/components/сards/tariff-card/stories/standard-tariff-data'
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
  args: standardTariffData,
}

export const ExclusiveTariffCard: Story = {
  args: exclusiveTariffData,

  render: args => {
    return (
      <div style={{ maxWidth: '600px' }}>
        <TariffCard {...args} type={'exclusive'} />
      </div>
    )
  },
}
