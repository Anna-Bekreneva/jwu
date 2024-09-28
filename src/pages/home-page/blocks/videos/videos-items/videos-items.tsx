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
          <video className={s.video} src={item.src} autoPlay controls loop muted/>
        </li>
      ))}
    </ul>
  )
}
