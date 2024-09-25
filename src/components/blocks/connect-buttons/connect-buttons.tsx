import sprite from '@/assets/icons/sprite.svg'
import { ButtonVariant } from '@/common'
import { Button } from '@/components'

import s from './connect-buttons.module.scss'
import {Link} from "react-scroll";

export const ConnectButtons = () => {
  return (
    <div className={s.contacts}>
      <Button as={Link} className={s.button} href={'#'} to={'contacts'} variant={ButtonVariant.secondary} smooth>
        Contact us
      </Button>
      <Button aria-label={'whatsapp'} as={'a'} href={'#'} isIcon>
        <svg
          aria-hidden
          className={`${s.icon} ${s.iconWhatsapp}`}
          viewBox={'0 0 24 24'}
          xmlns={'http://www.w3.org/2000/svg'}
        >
          <use xlinkHref={`${sprite}#whatsapp`} />
        </svg>
      </Button>
      <Button aria-label={'email'} as={'a'} href={'#'} isIcon>
        <svg
          aria-hidden
          className={`${s.icon} ${s.iconEmail}`}
          fill={'white'}
          viewBox={'0 0 24 24'}
          xmlns={'http://www.w3.org/2000/svg'}
        >
          <use xlinkHref={`${sprite}#email`} />
        </svg>
      </Button>
    </div>
  )
}
