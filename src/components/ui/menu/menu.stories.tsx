import { Menu } from '@/components'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: Menu,
  tags: ['autodocs'],
  title: 'Components/ui/Menu',
} satisfies Meta<typeof Menu>

export default meta
type Story = StoryObj<typeof meta>

export const MenuDefault: Story = {}
