import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { CustomRadioGroupProps, RadioGroup } from '@/components'

type ControlledRadioGroupProps<T extends FieldValues> = Pick<
  UseControllerProps<T>,
  'control' | 'name'
> &
  Omit<CustomRadioGroupProps, 'id' | 'onChange' | 'value'>
export const ControlledRadioGroup = <T extends FieldValues>({
  control,
  name,
  ...rest
}: ControlledRadioGroupProps<T>) => {
  const {
    field: { onChange, ...field },
    fieldState: { error },
  } = useController({ control, name })

  return (
    <RadioGroup
      {...rest}
      {...field}
      errorMessage={error?.message}
      id={name}
      onValueChange={onChange}
    />
  )
}
