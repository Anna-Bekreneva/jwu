import { ButtonVariant } from '@/common'
import { Button } from '@/components'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ButtonVariant,
    },
  },
  component: Button,
  tags: ['autodocs'],
  title: 'Components/ui/Button',
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: 'Primary button',
    variant: ButtonVariant.primary,
  },
}

export const Secondary: Story = {
  args: {
    children: 'Secondary button',
    variant: ButtonVariant.secondary,
  },
}
