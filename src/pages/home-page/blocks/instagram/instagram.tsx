import { InstagramGallery } from './instagram-gallery/instagram-gallery'
import { InstagramTop } from './instagram-top/instagram-top'

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
