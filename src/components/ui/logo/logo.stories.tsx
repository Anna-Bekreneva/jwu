import { Logo } from '@/components'
import { StoryObj } from '@storybook/react'
import { withRouter } from 'storybook-addon-remix-react-router'

const meta = {
  component: Logo,
  decorators: [withRouter],
  tags: ['autodocs'],
  title: 'Components/ui/Logo',
}

export default meta

type Story = StoryObj<typeof meta>

export const LogoDefault: Story = {}
