import * as Yup from 'yup'

export function initialValues(){
  return {
    title: '',
    content: '',
    //image: ''
  }
}

export function validationSchema(){
  return Yup.object({
    title: Yup.string().required(true),
    content: Yup.string().required(true),
    //image: Yup.string()
  })
}