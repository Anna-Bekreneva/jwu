import { InstagramGallery, InstagramTop } from '@/pages'

export const Instagram = () => {
  return (
    <section className={`section section--bg instagram`}>
      <div className={'container'}>
        <div className={'section__wrapper'}>
          <InstagramTop />
          <InstagramGallery />
        </div>
      </div>
    </section>
  )
}
