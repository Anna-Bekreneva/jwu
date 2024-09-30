import s from './videos.module.scss'

import { VideosItems } from './videos-items/videos-items'
import { VideosTop } from './videos-top/videos-top'

export const Videos = () => {
  return (
    <section className={`section ${s.section}`}>
      <div className={'container container--large'}>
        <VideosTop />
        <VideosItems />
      </div>
    </section>
  )
}
