'use client'
import { useState } from "react";
import { Form, FormButton, FormGroup, FormInput, FormTextArea } from "semantic-ui-react";
import { Blog } from "@/api"
import { initialValues, validationSchema } from "./PubForm.form"
import { Toaster, toast } from "sonner"
import { useFormik } from "formik"
import { useAuth } from "@/hooks";
import { FaCheck, FaTimes } from "react-icons/fa";

const ctrlPub = new Blog()

export function PubForm(props) {

  const { onOpenClose, pubId, pub, onReload } = props

  const { user } = useAuth()

  const [file, setFile] = useState()
  const [imageUrl, setImageUrl] = useState(null)

  const formik = useFormik({
    initialValues: initialValues(pub),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {

      try {

        if (!file) return
        const formData = new FormData();
        formData.append('files', file);
        const res = await fetch('http://localhost:1337/api/upload', { method: 'POST', body: formData })
        const imageData = await res.json();
        const imageId = imageData?.[0]?.id;

        if (eventId) {
          await ctrlPub.update( { ...formValue, image: imageId }, pubId)
          toast.success(' ¡ Blog editado exitosamente ! ')
        } else {
         
        await ctrlPub.create(user.id, { ...formValue, image: imageId })
          toast.success(' ¡ Blog agregado exitosamente ! ')
        }

        formik.handleReset()
        onOpenClose()
        //onReload()
      } catch (error) {
        console.error(error)
        onOpenClose()
        toast.error(' ¡ Error en el blog ! ')
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


      <FormInput
        name="image"
        type="file"
        accept="image/png, image/jpeg"
        value={formik.values.image}
        error={formik.errors.image}
        onChange={(e) => {
          setFile(e.target.files[0])
        }}
      />


      <FormGroup>
        <FormButton
          primary
          type="submit"
          size="mini"
          loading={formik.isSubmitting}
        >
          <h4><FaCheck />OK</h4>
        </FormButton>
        <FormButton
          secondary
          size="mini"
          onClick={onOpenClose}
        >
          <h4><FaTimes />Cancelar</h4>
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
