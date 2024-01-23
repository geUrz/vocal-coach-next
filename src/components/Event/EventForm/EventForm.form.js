import * as Yup from 'yup'

export function initialValues(event){
  return {
    title: event?.title || '',
    content: event?.content || ''
  }
}

export function validationSchema(){
  return Yup.object({
    title: Yup.string().required(true),
    content: Yup.string().required(true)
  })
}

