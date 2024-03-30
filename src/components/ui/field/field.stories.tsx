import { useState } from 'react'

import { Field } from '@/components'
import { action } from '@storybook/addon-actions'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  argTypes: {
    as: {
      control: { type: 'radio' },
      options: ['input', 'textarea'],
    },
    label: { type: 'string' },
    name: { type: 'string' },
    placeholder: { type: 'string' },
  },
  component: Field,
  tags: ['autodocs'],
  title: 'Components/ui/Field',
} satisfies Meta<typeof Field>

export default meta
type Story = StoryObj<typeof meta>

export const InputDefault: Story = {
  render: args => {
    const [value, setValue] = useState('')

    const changeHandler = (value: string) => {
      setValue(value)
      action(value)()
    }

    return (
      <Field
        {...args}
        as={'input'}
        id={'inputDefault'}
        onValueChange={changeHandler}
        placeholder={'placeholder'}
        value={value}
      />
    )
  },
}

export const TextareaDefault: Story = {
  render: args => {
    const [value, setValue] = useState('')

    const changeHandler = (value: string) => {
      setValue(value)
      action(value)()
    }

    return (
      <Field
        as={'textarea'}
        id={'inputDefault'}
        placeholder={'placeholder'}
        {...args}
        onValueChange={changeHandler}
        value={value}
      />
    )
  },
}
