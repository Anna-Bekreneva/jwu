import {FC} from "react";
import s from './statistic-card.module.scss'
import {Typography} from "@/components";
import {TypographyVariant} from "@/common";

type Props = {
  numbers: string
  text: string
  className?: string
}
export const StatisticCard: FC<Props> = ({numbers, text, className }) => {
  return (
    <article className={`${s.card} ${className}`}>
        <Typography className={s.title} as={'h3'} variant={TypographyVariant.title1}>{numbers}</Typography>
        <Typography className={s.text}>{text}</Typography>
    </article>
  )
}
