import sprite from '@/assets/icons/sprite.svg'
import { Button, ButtonPropsType } from '@/components'

import s from './social.module.scss'

type Props = {
  className?: string
  fill?: string
  idIcon: string
  stroke?: string
}

export type SocialPropsType = Props & Omit<ButtonPropsType<'a'>, keyof Props>

export const Social = ({ className, fill, idIcon, stroke, ...rest }: SocialPropsType) => {
  return (
    <Button as={'a'} className={`${s.icon} ${className}`} isIcon {...rest}>
      <svg
        aria-hidden
        fill={fill}
        stroke={stroke}
        viewBox={'0 0 24 24'}
        xmlns={'http://www.w3.org/2000/svg'}
      >
        <use xlinkHref={`${sprite}#${idIcon}`} />
      </svg>
    </Button>
  )
}
