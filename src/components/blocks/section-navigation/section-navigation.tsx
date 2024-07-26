import { Link } from 'react-scroll'

import { ButtonVariant } from '@/common'
import { Button } from '@/components'

import s from './section-navigation.module.scss'
export const SectionNavigation = () => {
  return (
    <div className={s.buttons}>
      <Button as={Link} className={s.button} href={'#'} offset={40} smooth to={'contacts'}>
        get a free consultation
      </Button>
      <Button
        as={Link}
        className={s.button}
        href={'#'}
        offset={40}
        smooth
        to={'pricing'}
        variant={ButtonVariant.secondary}
      >
        See prices
      </Button>
    </div>
  )
}
