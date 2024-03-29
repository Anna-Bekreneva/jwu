import { useLayoutEffect, useRef, useState } from 'react'

export const useTypography = () => {
  const typographyRef = useRef<HTMLElement | null>(null)

  const [svgWidth, setSvgWidth] = useState(0)
  const [path, setPath] = useState('0')

  useLayoutEffect(() => {
    if (typographyRef && typographyRef.current?.offsetWidth) {
      const withTypography = typographyRef.current?.offsetWidth
      const localSvgWith = Math.floor(withTypography / 3)

      setSvgWidth(localSvgWith)
      const startX = 0
      const startY = 15 //96 15
      const control1X = localSvgWith * 0.25
      const control1Y = 0 //81 0
      const control2X = localSvgWith * 0.5
      const control2Y = 9 //90 9
      const endX = localSvgWith
      const endY = 19 //99 19

      setPath(
        `M${startX},${startY} C${control1X},${control1Y} ${control2X},${control2Y} ${endX},${endY}`
      )
    }
  }, [])

  return { path, svgWidth, typographyRef }
}
