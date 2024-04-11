import {Meta, StoryObj} from "@storybook/react";
import {ReviewCard} from "@/components/сards/review-card/review-card";

const meta = {
  argTypes: {
    name: { control: {type: 'text'} },
    position: { control: {type: 'text'} },
  },
  component: ReviewCard,
  tags: ['autodocs'],
  title: 'Components/Cards/Review-card',
} satisfies Meta<typeof ReviewCard>

export default meta
type Story = StoryObj<typeof meta>

export const ReviewCardDefault: Story = {
  render: (args) => {

    const text = ['Spotted your mobile billboard ad, and I can\'t help but applaud its eye-catching design! Incredibly creative with vibrant colors, it\'s truly memorable. I even took a photo and shared it with friends!']

    return (
      <div style={{
        backgroundColor: 'white',
        borderRadius: '20px',
        padding: '50px',
        maxWidth: '600px',
        width: '100%'
      }}>
        <ReviewCard text={text} name={args.name ?? 'Vitaliy Kusaev'} position={args.position ?? 'Investigator'} src={'/assets/images/reviews/1.jpg'} alt={'ava'} avif={'/assets/images/reviews/1.avif'}
                    webp={'/assets/images/reviews/1.webp'}/>
      </div>
    )
  }
}