'use client'
import { Form, FormButton, FormGroup, FormInput, FormTextArea } from "semantic-ui-react";
import { Blog } from "@/api"
import { initialValues, validationSchema } from "./CreatePubForm.form"
import { Toaster, toast } from "sonner"
import { useFormik } from "formik"
import { useAuth } from "@/hooks";
import { FaCheck, FaTimes } from "react-icons/fa";

const ctrlBlog = new Blog()

export function CreatePubForm(props) {

  const {onOpenClose, onReload} = props 

  const {user} = useAuth()

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        await ctrlBlog.create(formValue, user.id)
        formik.handleReset();
        onOpenClose()
        //onReload()
        toast.success(' ¡ Publicación creada correctamente ! ')
      } catch (error) {
        toast.error(' ¡ Error al crear publicación ! ')
        console.error(error);
      }
    },
  })

  return (
    
    <Form onSubmit={formik.handleSubmit}>
      <FormInput 
        name="title"
        placeholder="Título"
        value={formik.values.title}
        onChange={formik.handleChange}
        error={formik.errors.title}
      />
      <FormTextArea 
        name="content"
        placeholder="Descripción"
        value={formik.values.content}
        onChange={formik.handleChange}
        error={formik.errors.content}
      />
      {/* <FormInput 
        type="file"
      />  */}
      <FormGroup>
        <FormButton
          secondary
          type="submit"
          size="mini"
          loading={formik.isSubmitting}
        >
          <FaCheck />
        </FormButton>
        <FormButton
          negative 
          size="mini" 
          onClick={onOpenClose}
        >
          <FaTimes />
        </FormButton>
      </FormGroup>
      <Toaster 
        theme="dark"
        position="bottom-center"
        duration={8000}
        visibleToasts={1}
        richColors
      />
    </Form>

  )
}
