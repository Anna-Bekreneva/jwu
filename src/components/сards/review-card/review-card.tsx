import s from './review-card.module.scss'
import {FC} from "react";
import {Picture, PicturePropsType, Typography} from "@/components";
import {TypographyVariant} from "@/common";

type Props = {
  text: string[]
  name: string
  position?: string
  className?: string
} & Partial<Omit<PicturePropsType, 'className'>>
export const ReviewCard: FC<Props> = ({ className, name, text, position, alt = 'ava', src, ...rest }) => {
  return (
    <article className={`${s.card} ${className}`}>
      <div className={s.text}>
        {text.map((item, index) => <Typography key={index} >{item}</Typography> )}
      </div>
      <div className={s.author}>
        { src && <Picture src={src} alt={alt} { ...rest} className={s.ava}/> }
        <Typography className={s.name} variant={TypographyVariant.body2}> {name} </Typography>
        { position && <Typography className={s.position} variant={TypographyVariant.caption1}> {position} </Typography> }
      </div>
    </article>
  )
}