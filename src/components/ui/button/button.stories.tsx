import sprite from '@/assets/icons/sprite.svg'
import { ButtonVariant } from '@/common'
import { Button, FacebookIcon } from '@/components'
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
    children: (
      <svg
        aria-hidden
        fill={'none'}
        height={24}
        stroke={'#ED008C'}
        viewBox={'0 0 24 24'}
        width={24}
        xmlns={'http://www.w3.org/2000/svg'}
      >
        <use xlinkHref={`${sprite}#email`} />
      </svg>
    ),
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
