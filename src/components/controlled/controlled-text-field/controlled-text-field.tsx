import { ElementType } from 'react'
import { Control, FieldPath, FieldValues, useController } from 'react-hook-form'

import { Field, TextFieldProps } from '@/components'

type ControlledTextFieldProps<T extends FieldValues, D extends ElementType> = {
  as?: D
  control: Control<T>
  name: FieldPath<T>
} & Omit<TextFieldProps<D>, 'id' | 'onChange' | 'value'>

export const ControlledTextField = <T extends FieldValues, D extends ElementType>({
  as,
  control,
  name,
  ...rest
}: ControlledTextFieldProps<T, D>) => {
  const {
    field: { onChange, ...field },
    fieldState: { error },
  } = useController({
    control,
    name,
  })

  return (
    <Field {...field} {...rest} as={as} errorMessage={error?.message} onValueChange={onChange} />
  )
}
