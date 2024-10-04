import { useRef } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

import emailjs from '@emailjs/browser'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const ContactsFormSchema = z.object({
  aim: z.string(),
  email: z.string().email('Please enter a valid email'),
  kindBusiness: z.string(),
  message: z.string().optional(),
  name: z.string().min(3),
  phone: z.string().regex(/^\+?[1-9]\d{1,14}$/, 'Please enter a valid phone number'),
})

type ContactsFormSchemaType = z.infer<typeof ContactsFormSchema>
export const useHookForm = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<ContactsFormSchemaType>({
    defaultValues: {
      aim: 'business',
      email: '',
      kindBusiness: '',
      message: '',
      name: '',
      phone: '',
    },
    resolver: zodResolver(ContactsFormSchema),
  })

  const formRef = useRef<HTMLFormElement | null>(null)

  const submitHandler = () => {
    if (formRef.current) {
      emailjs
        .sendForm('service_4tsi8cm', 'template_0alsqad', formRef.current, '1wLDAq2hVGAmuyjsY')
        .then(res => {
          if (res.status === 200) {
            reset()
            toast('Thank you! Your application has been successfully sent', { type: 'success' })
          }
        })
        .catch(error => {
          if (error.message) {
            toast('Check your internet connection', { type: 'error' })
          } else {
            toast("Something's gone wrong! Try again later", { type: 'error' })
          }
        })
    }
  }

  const submitFormHandler = handleSubmit(submitHandler)

  return { control, errors, formRef, submitFormHandler }
}
