import { Accordion, AccordionContent, AccordionHeader, AccordionItem } from '@/components'
import { StoryObj } from '@storybook/react'

const meta = {
  argTypes: {
    type: {
      control: { type: 'radio' },
      options: ['single', 'multiple'],
    },
  },
  component: Accordion,
  tags: ['autodocs'],
  title: 'Components/ui/Accordion',
}

export default meta
type Story = StoryObj<typeof meta>

export const AccodrionDefault: Story = {
  args: {
    type: 'single',
  },

  render: args => {
    const items = [
      {
        content: (
          <p>
            Mobile LED Billboards are digital billboards mounted on trucks and driven through busy
            streets in&nbsp;popular city locations. This allows your ads to&nbsp;reach a wider
            audience VS a classic static billboard
          </p>
        ),
        header: 'How does ads on Mobile LED Billboards work?',
        id: '1',
      },
      {
        content: (
          <>
            <p>
              Mobile LED Billboards are digital billboards mounted on trucks and driven through busy
              streets in&nbsp;popular city locations. This allows your ads to&nbsp;reach a wider
              audience VS a classic static billboard
            </p>
            <p>
              Mobile LED Billboards are digital billboards mounted on trucks and driven through busy
              streets in&nbsp;popular city locations. This allows your ads to&nbsp;reach a wider
              audience VS a classic static billboard
            </p>
          </>
        ),
        header: 'Where my advertisement will be placed?',
        id: '2',
      },
    ]

    const onValueChange = (value: string | string[]) => console.log(value)

    return (
      <Accordion
        {...args}
        onValueChange={onValueChange}
        style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}
      >
        {items.map(item => (
          <AccordionItem key={item.id} value={item.id}>
            <AccordionHeader> {item.header} </AccordionHeader>
            <AccordionContent>{item.content}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    )
  },
}
