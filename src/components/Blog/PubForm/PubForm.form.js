import * as Yup from 'yup'

export function initialValues(pub){
  return {
    title: pub?.title || '',
    content: pub?.content || ''
  }
}

export function validationSchema(){
  return Yup.object({
    title: Yup.string().required(true),
    content: Yup.string().required(true)
  })
}