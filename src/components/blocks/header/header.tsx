import { ConnectButtons, Logo, Menu, useHeader } from '@/components'

import s from './header.module.scss'

export const Header = () => {
  const { burgerButtonRef, isOpenMenu, menuWrapperRef, setIsOpenMenu } = useHeader()

  return (
    <header className={s.header}>
      <div aria-hidden className={'overlay'} data-active={isOpenMenu}></div>
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
              <ConnectButtons />
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
