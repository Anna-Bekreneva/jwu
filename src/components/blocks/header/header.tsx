import { FC } from 'react'

import sprite from '@/assets/icons/sprite.svg'
import { ButtonVariant } from '@/common'
import { Button, Logo, Menu, useHeader } from '@/components'

import s from './header.module.scss'

export const Header: FC = () => {
  const { burgerButtonRef, isOpenMenu, menuWrapperRef, setIsOpenMenu } = useHeader()

  return (
    <header className={s.header}>
      {isOpenMenu && <div aria-hidden className={'overlay'} />}
      <div className={s.wrapper} data-open={isOpenMenu}>
        <div className={'container container--large'}>
          <nav className={s.nav}>
            <Logo className={s.logo} />
            <button
              aria-controls={'burger-menu'}
              aria-expanded={isOpenMenu}
              className={s.burgerButton}
              data-open={isOpenMenu}
              id={'burger-button'}
              onClick={() => setIsOpenMenu(!isOpenMenu)}
              ref={burgerButtonRef}
              type={'button'}
            >
              <span className={s.burgerLine}></span>
              <span className={'sr-only'}>{isOpenMenu ? 'Close menu' : 'Open menu'}</span>
            </button>
            <div
              className={s.menuWrapper}
              data-open={isOpenMenu}
              id={'burger-menu'}
              ref={menuWrapperRef}
              role={'menu'}
            >
              <Menu className={s.menu} />
              <div className={s.contacts}>
                <Button
                  as={'a'}
                  className={s.button}
                  href={'#contacts'}
                  variant={ButtonVariant.secondary}
                >
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
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
