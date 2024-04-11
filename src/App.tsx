import {ReviewCard} from "@/components/сards/review-card";

export function App() {
  const args = {
    text: ['Spotted your mobile billboard ad, and I can\'t help but applaud its eye-catching design! Incredibly creative with vibrant colors, it\'s truly memorable. I even took a photo and shared it with friends!'],
    name: 'Vitaliy Kusaev',
    position: 'Investigator'
  }

  return <div className={'wrapper'}>
    <div style={{
      backgroundColor: 'white',
      borderRadius: '20px',
      padding: '50px',
      maxWidth: '600px',
      width: '100%'
    }}>
      <ReviewCard {...args} src={'/assets/images/reviews/1.jpg'} alt={'ava'} avif={'/assets/images/reviews/1.avif'}
                  webp={'/assets/images/reviews/1.webp'}/>
    </div>
  </div>
}
