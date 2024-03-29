import { Ref, SVGProps, forwardRef, memo } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => {
  return (
    <svg
      height={'24'}
      ref={ref}
      viewBox={'0 0 24 24'}
      width={'24'}
      xmlns={'http://www.w3.org/2000/svg'}
      {...props}
    >
      <path
        d={
          'M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6M22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6M22 6L12 13L2 6'
        }
        strokeLinecap={'round'}
        strokeLinejoin={'round'}
        strokeWidth={'2'}
      />
    </svg>
  )
}

const ForwardRef = forwardRef(SvgComponent)

export const EmailIcon = memo(ForwardRef)