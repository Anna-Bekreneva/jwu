import {Button} from "@/components";
import {Link} from "react-scroll";
import {ButtonVariant} from "@/common";
import s from './section-navigation.module.scss'
export const SectionNavigation = () => {
  return (
    <div className={s.buttons}>
      <Button
        as={Link}
        className={s.button}
        href={'#'}
        to={'contacts'}
        offset={40}
        smooth
      >
        get a free consultation
      </Button>
      <Button
        as={Link}
        className={s.button}
        href={'#'}
        variant={ButtonVariant.secondary}
        to={'pricing'}
        offset={40}
        smooth
      >
        See prices
      </Button>
    </div>
  )
}