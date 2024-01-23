import { useState } from "react"
import { Button, Image } from "semantic-ui-react"
import { BasicModal } from "@/layouts/BasicModal"
import { useAuth } from "@/hooks"
import { FaCheck, FaEdit, FaTimes, FaTrash } from "react-icons/fa"
import { Confirm } from "@/components/Layout/Confirm"
import { Event as EventApi } from "@/api"
import { Toaster, toast } from "sonner"
import Link from "next/link"
import { EventForm } from "../EventForm"
import styles from './Event.module.css'
import { NoImage, SlideImage } from "@/components/Layout"

const eventDel = new EventApi()


export function Event(props) {

  const {event, eventId, onReload} = props

  const {user} = useAuth()

  const [show, setShow] = useState(false)
  
  const onOpenClose = () => setShow((prevState) => !prevState)

  const [showImg, setShowImg] = useState(false)
  
  const onOpenCloseImg = () => setShowImg((prevState) => !prevState)

  const [showConfirm, setShowConfirm] = useState(false)
  
  const openCloseConfirm = () => setShowConfirm((prevState) => !prevState)

  const onDelete = async () => {
    try {
      await eventDel.delete(eventId)
      openCloseConfirm()
      onReload()
      toast.success(' ¡ Evento eliminado exitosamente ! ')
    } catch (error) {
      console.error(error);
    }
  }

  return (
    
    <>
      <div className={styles.sideImage}>
        <div className={styles.imgContainerBlog}>
          
            {
              event.image.data ? <Image src={event.image.data.attributes.url} /> : <NoImage />
            }
          
          
        </div>
        <div className={styles.containerArticulo}>
         <h2>{event.title}</h2>
         <p>{event.content}</p>
         {/* <Link href={`/event/${eventId}`}>
            Ver imágenes
         </Link>  */}

         <div className={styles.seeImg} onClick={onOpenCloseImg}>
          <h1>Ver imágenes</h1>
         </div>
        
          {user ? (
            <div className={styles.boxActions}>
              <Button
                primary
                size='mini'
                onClick={onOpenClose}
              >
                <h4><FaEdit />Editar</h4>
              </Button>
              <Button
                secondary
                size='mini'
                onClick={openCloseConfirm}
              > 
                <h4><FaTrash />Eliminar</h4>
              </Button>
    
            </div>
          ) : (
            ''
          )}
        </div>
      </div> 

    <Confirm
      open={showConfirm}
      cancelButton={
        <div className={styles.iconClose}>
          <h4><FaTimes />Cancelar</h4>
        </div>
      }
      confirmButton={
        <div className={styles.iconCheck}>
          <h4><FaCheck />OK</h4>
        </div>
      }
      onConfirm={onDelete}
      onCancel={openCloseConfirm}
      content='¿ Estas seguro de eliminar el evento ?'
    />

    <Toaster 
      theme="dark"
      position="bottom-center"
      duration={5000}
      visibleToasts={1}
      richColors
    />

    <BasicModal titleModalForm='Editar evento' show={show} onClose={onOpenClose}>
      <EventForm onOpenClose={onOpenClose} onReload={onReload} eventId={eventId} event={event} />
    </BasicModal>

    <BasicModal show={showImg} onClose={onOpenCloseImg}>
     <SlideImage onOpenCloseImg={onOpenCloseImg} eventId={eventId} event={event} /> 
    </BasicModal>

    </>

  )
}
