import { TypographyVariant } from '@/common'
import { Typography } from '@/components'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: TypographyVariant,
    },
  },
  component: Typography,
  tags: ['autodocs'],
  title: 'Components/ui/Typography',
} satisfies Meta<typeof Typography>

export default meta
type Story = StoryObj<typeof meta>

export const Large: Story = {
  args: {
    as: 'h1',
    children: 'Typography large',
    variant: TypographyVariant.large,
  },
}

export const Title1: Story = {
  args: {
    as: 'h2',
    children: 'Typography title1',
    variant: TypographyVariant.title1,
  },
}

export const Title1WithLine: Story = {
  args: {
    as: 'h2',
    children: 'Typography title1',
    isLine: true,
    variant: TypographyVariant.title1,
  },
}

export const Title2: Story = {
  args: {
    as: 'h3',
    children: 'Typography title2',
    variant: TypographyVariant.title2,
  },
}

export const Subtitle: Story = {
  args: {
    as: 'h4',
    children: 'Typography subtitle',
    variant: TypographyVariant.subtitle,
  },
}

export const Strong1: Story = {
  args: {
    as: 'a',
    children: 'Typography strong1',
    href: '#',
    variant: TypographyVariant.strong1,
  },
}

export const Strong2: Story = {
  args: {
    as: 'a',
    children: 'Typography strong2',
    href: '#',
    variant: TypographyVariant.strong2,
  },
}

export const Caption1: Story = {
  args: {
    as: 'span',
    children: 'Typography caption1',
    variant: TypographyVariant.caption1,
  },
}

export const Caption2: Story = {
  args: {
    as: 'span',
    children: 'Typography caption2',
    variant: TypographyVariant.caption2,
  },
}

export const Body1: Story = {
  args: {
    as: 'p',
    children: 'Typography body1',
    variant: TypographyVariant.body1,
  },
}

export const Body2: Story = {
  args: {
    as: 'p',
    children: 'Typography body2',
    variant: TypographyVariant.body2,
  },
}
