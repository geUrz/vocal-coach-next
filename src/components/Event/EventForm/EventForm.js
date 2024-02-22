import { useEffect, useRef, useState } from "react";
import { Event as EventApi } from "@/api";
import { Form, FormGroup, FormInput, FormTextArea, FormField, Label, FormButton } from "semantic-ui-react";
import { initialValues, validationSchema } from "./EventForm.form";
import { Toaster, toast } from "sonner";
import { useFormik } from "formik";
import { FaCheck, FaTimes } from "react-icons/fa";
import { useAuth } from "@/hooks";
import styles from "./EventForm.module.css";
import Image from "next/image";
import { FaPlus } from "react-icons/fa6";

const ctrlEvent = new EventApi();

export function EventForm(props) {
  const { onOpenClose, eventId, event, onReload } = props;

  const { user } = useAuth();

  const formatEventToDataForm = (event) => {
    return {
      title: event?.title || "",
      content: event?.content || "",
      image: event?.image?.data?.attributes.url || "",
      gallery: event?.gallery?.data?.map((image) => image.attributes.url) || [],
      imageId: event?.image?.data?.id || null,
      galleryIds: event?.gallery?.data?.map((image) => image.id) || [],
    };
  };

  const formatedEvent = formatEventToDataForm(event);

  const [form, setForm] = useState(formatedEvent);

  const addImageInputRef = useRef();

  const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append("files", file);
    const res = await fetch("http://localhost:1337/api/upload", { method: "POST", body: formData });
    const imageData = await res.json();
    const imageId = imageData?.[0]?.id;
    console.log(imageData?.[0]?.url);
    setForm({ ...form, image: imageData?.[0]?.url, imageId });
  };

  const uploadGallery = async (files) => {
    if (files.length) {
      for (let i = 0; i < files.length; i++) {
        const formData = new FormData();
        formData.append("files", files[i]);
        const res = await fetch("http://localhost:1337/api/upload", { method: "POST", body: formData });
        const imageData = await res.json();
        const imageId = imageData?.[0]?.id;
        setForm({ ...form, gallery: [...form.gallery, imageData?.[0]?.url], galleryIds: [...form.galleryIds, imageId] });
      }
    }
  };
  const formik = useFormik({
    initialValues: initialValues(formatedEvent),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        //create event
        const data = {
          ...formValue,
          image: form.imageId,
          gallery: form.galleryIds,
          user: user.id,
        };
        if (eventId) {
          const res = await ctrlEvent.update(data, eventId);
          if (res.data) toast.success(" ¡ Evento actualizado con éxito ! ");
        } else {
          const res = await ctrlEvent.create(user.id, data);
          if (res.data) toast.success(" ¡ Evento creado con éxito ! ");
        }

        formik.handleReset();
        onOpenClose();
        //onReload()
      } catch (error) {
        console.error(error);
        onOpenClose();
        toast.error(" ¡ Error en el evento ! ");
      }
    },
  });

  return (
    <>
      <div className={styles.iconClose} onClick={onOpenClose}>
        <FaTimes />
      </div>

      <Form onSubmit={formik.handleSubmit}>
        <FormGroup widths="equal">
          <FormField>
            <Label>Titulo*</Label>
            <FormInput name="title" type="text" placeholder="Título" value={formik.values.title} onChange={formik.handleChange} error={formik.errors.title} />
          </FormField>
          <FormField>
            <Label>Descripción*</Label>
            <FormTextArea name="content" type="text" placeholder="Descripción" value={formik.values.content} onChange={formik.handleChange} error={formik.errors.content} />
          </FormField>
          <FormField>
            <Label>Seleccionar imágen*</Label>
            {form.image && <img className={styles.prevImage} src={form.image} alt="preview" />}
          </FormField>

          <FormField>
            <FormInput
              name="image"
              type="file"
              accept="image/png, image/jpeg"
              value={formik.values.image}
              error={formik.errors.image}
              onChange={async (e) => {
                const file = e.target.files[0];
                await uploadImage(file);
              }}
            />
          </FormField>
          <FormField>
            <Label>Galeria</Label>
            <div>
              <div className={styles["gallery-images"]}>
                {form.gallery.map((url, i) => {
                  return <img className={styles["gallery-image"]} src={url} key={i} alt="image" />;
                })}
              </div>
              <input
                accept="image/png, image/jpeg"
                multiple
                onChange={async (e) => {
                  e.preventDefault();
                  const files = e.currentTarget.files;
                  await uploadGallery(files);
                }}
                className={styles["add-image-input"]}
                ref={addImageInputRef}
                type="file"
              />
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  if (addImageInputRef.current) {
                    addImageInputRef.current.click();
                  }
                }}
                className={styles["add-imgage-btn"]}
              >
                <FaPlus />
              </button>
            </div>
          </FormField>
        </FormGroup>
        <FormButton primary type="submit" size="mini" loading={formik.isSubmitting}>
          <h4>
            <FaCheck />
            OK
          </h4>
        </FormButton>
      </Form>
      <Toaster theme="dark" position="bottom-center" duration={5000} visibleToasts={1} richColors />
    </>
  );
}
