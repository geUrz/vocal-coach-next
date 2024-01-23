import { useState } from "react"
import { Event as EventApi } from "@/api"
import { Form, FormGroup, FormInput, FormTextArea, FormField, Label, FormButton } from "semantic-ui-react"
import { initialValues, validationSchema } from "./EventForm.form"
import { Toaster, toast } from "sonner"
import { useFormik } from "formik"
import { FaCheck, FaTimes } from "react-icons/fa"
import { useAuth } from "@/hooks"
import styles from './EventForm.module.css'
import Image from "next/image"

const ctrlEvent = new EventApi()

export function EventForm(props) {

  const { onOpenClose, eventId, event, onReload } = props

  const { user } = useAuth()

  const [file, setFile] = useState()
  const [imageUrl, setImageUrl] = useState(null)

  const formik = useFormik({
    initialValues: initialValues(event),
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
          await ctrlEvent.update( { ...formValue, image: imageId }, eventId)
          toast.success(' ¡ Evento editado exitosamente ! ')
        } else {
         
        await ctrlEvent.create(user.id, { ...formValue, image: imageId })
          toast.success(' ¡ Evento agregado exitosamente ! ')
        }

        formik.handleReset()
        onOpenClose()
        //onReload()
      } catch (error) {
        console.error(error)
        onOpenClose()
        toast.error(' ¡ Error en el evento ! ')
      }
    },
  })

  return (

    <>

      <div className={styles.iconClose} onClick={onOpenClose}>
        <FaTimes />
      </div>

      <Form onSubmit={formik.handleSubmit}>
        <FormGroup widths='equal'>
          <FormField>
            <Label>
              Titulo*
            </Label>
            <FormInput
              name="title"
              type="text"
              placeholder="Título"
              value={formik.values.title}
              onChange={formik.handleChange}
              error={formik.errors.title}
            />
          </FormField>
          <FormField>
            <Label>
              Descripción*
            </Label>
            <FormTextArea
              name="content"
              type="text"
              placeholder="Descripción"
              value={formik.values.content}
              onChange={formik.handleChange}
              error={formik.errors.content}
            />
          </FormField>
          <FormField>
          <Label>
              Seleccionar imágen*
            </Label>
            {imageUrl && <Image className={styles.prevImage} src={imageUrl} alt="preview" width={200} height={100} />}
          </FormField>
          <FormField>
          <FormInput
        name="image"
        type="file"
        accept="image/png, image/jpeg"
        value={formik.values.image}
        error={formik.errors.image}
        onChange={(e) => {
          const file = e.target.files[0];
          setFile(file)
          const reader = new FileReader();
          reader.onload = function (event) {
           const fileUrl =  event.target.result;
           setImageUrl(fileUrl);
          }
          reader.readAsDataURL(file);
        }}
      />  
          </FormField> 
        </FormGroup>
        <FormButton
          primary
          type="submit"
          size="mini"
          loading={formik.isSubmitting}
        >
          <h4><FaCheck />OK</h4>
        </FormButton>



      </Form>
      <Toaster
        theme="dark"
        position="bottom-center"
        duration={5000}
        visibleToasts={1}
        richColors
      />
    </>

  )
}


