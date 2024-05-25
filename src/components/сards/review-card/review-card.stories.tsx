import { ReviewCard } from '@/components/сards/review-card/review-card'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  argTypes: {
    name: { control: { type: 'text' } },
    position: { control: { type: 'text' } },
  },
  component: ReviewCard,
  tags: ['autodocs'],
  title: 'Components/Cards/Review-card',
} satisfies Meta<typeof ReviewCard>

export default meta
type Story = StoryObj<typeof meta>

export const ReviewCardDefault: Story = {
  args: {
    name: 'Alexandr',
    position: 'frontend-developer',
    text: [
      "Spotted your mobile billboard ad, and I can't help but applaud its eye-catching design! Incredibly creative with vibrant colors, it's truly memorable. I even took a&nbsp;photo and shared it with friends!",
    ],
  },
  render: args => {
    return (
      <div
        style={{
          backgroundColor: 'white',
          borderRadius: '20px',
          maxWidth: '600px',
          padding: '50px',
          width: '100%',
          margin: '0 auto'
        }}
      >
        <ReviewCard
          alt={'ava'}
          avif={'/assets/images/reviews/1.avif'}
          name={args.name}
          position={args.position}
          src={'/assets/images/reviews/1.jpg'}
          text={args.text}
          webp={'/assets/images/reviews/1.webp'}
        />
      </div>
    )
  },
}
