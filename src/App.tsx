import s from '@/components/ui/typography/typography.module.scss'

export function App() {
  return (
    <div className={'wrapper'}>
      Hello
      <svg
        className={s.test}
        fill={'none'}
        viewBox={'0 0 50% 108'}
        // viewBox={'0 0 100% 17'}
        // width={'100%'}
        xmlns={'http://www.w3.org/2000/svg'}
      >
        {/*<path d={'M10 10 C 20 20, 40 20, 50 10'} fill={'transparent'} stroke={'black'} />*/}
        {/*<path d={'M0,156 C119,141 197,150 242,159 '} stroke={'yellow'} strokeWidth={6} />*/}
        <path
          d={'M56,81 C146,46 264,75 257,73 '}
          stroke={'yellow'}
          strokeWidth={6}
          style={{ width: '100%' }}
          width={'100%'}
        />
        {/*<path*/}
        {/*  d={'M3.07188 13.4283C58.1985 10.146 344.425 -4.40225 538.781 10.0885'}*/}
        {/*  stroke={'#FFA522'}*/}
        {/*  strokeLinecap={'round'}*/}
        {/*  viewBox={'0 0 100% 17'}*/}
        {/*/>*/}
      </svg>
    </div>
  )
}
