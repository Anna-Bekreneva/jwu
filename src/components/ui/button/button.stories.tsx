import { ButtonVariant } from '@/common'
import { Button, EmailIcon, FacebookIcon } from '@/components'
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

export const PrimaryWithIcon: Story = {
  args: {
    as: 'a',
    children: <FacebookIcon fill={'white'} />,
    href: '#',
    isIcon: true,
    target: '_blank',
    variant: ButtonVariant.primary,
  },
}

export const SecondaryWithIcon: Story = {
  args: {
    as: 'a',
    children: <EmailIcon fill={'none'} stroke={'#ED008C'} />,
    href: 'mailto:test@gmail.com',
    isIcon: true,
    target: '_blank',
    variant: ButtonVariant.secondary,
  },
}

export const Secondary: Story = {
  args: {
    children: 'Secondary button',
    variant: ButtonVariant.secondary,
  },
}
