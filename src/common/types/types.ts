export const ButtonVariant = {
  primary: 'primary',
  secondary: 'secondary',
} as const

export const TypographyVariant = {
  body1: 'body1',
  body2: 'body2',
  caption1: 'caption1',
  caption2: 'caption2',
  large: 'large',
  strong1: 'strong1',
  strong2: 'strong2',
  subtitle: 'subtitle',
  title1: 'title1',
  title2: 'title2',
} as const

export type ServiceData = {
  icon: string
  iconBg?: 'orange' | 'purple'
  text?: string
  title: string
}
