import s from './videos-items.module.scss'

const dataVideo: { src: string }[] = [
  { src: '/assets/videos/1.mp4' },
  { src: '/assets/videos/2.mp4' },
]

export const VideosItems = () => {
  return (
    <ul className={s.items}>
      {dataVideo.map((item, index) => (
        <li className={`${s.item} card`} key={index}>
          <video autoPlay className={s.video} controls loop muted src={item.src} />
        </li>
      ))}
    </ul>
  )
}
