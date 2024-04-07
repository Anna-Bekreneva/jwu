import { ComponentPropsWithoutRef, FC } from 'react'

type Props = {
  alt: string
  avif: string
  src: string
  webp: string
}

export type PicturePropsType = Props & Omit<ComponentPropsWithoutRef<'img'>, keyof Props>
export const Picture: FC<PicturePropsType> = ({ alt, avif, src, webp, ...rest }) => {
  return (
    <picture>
      <source srcSet={avif} type={'image/avif'} />
      <source srcSet={webp} type={'image/webp'} />
      <img alt={alt} src={src} {...rest} />
    </picture>
  )
}
