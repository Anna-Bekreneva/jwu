import { useState } from 'react'

import { RadioGroup, RadioItem } from '@/components'
import { action } from '@storybook/addon-actions'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  argTypes: {
    errorMessage: { type: 'string' },
  },
  component: RadioGroup,
  tags: ['autodocs'],
  title: 'Components/ui/RadioGroup',
} satisfies Meta<typeof RadioGroup>

export default meta
type Story = StoryObj<typeof meta>

export const RadioGroupDefault = (args: Story) => {
  const [value, setValue] = useState('radio-1')
  const onValueChange = (value: string) => {
    setValue(value)
    action(value)()
  }

  return (
    <RadioGroup {...args} name={'RadioGroupForStory'} onValueChange={onValueChange} value={value}>
      <RadioItem label={'radio-1'} value={'radio-1'} />
      <RadioItem label={'radio-2'} value={'radio-2'} />
      <RadioItem label={'radio-3'} value={'radio-3'} />
    </RadioGroup>
  )
}
