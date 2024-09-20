import { VideosItems, VideosTop } from '@/pages'

import s from './videos.module.scss'

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
