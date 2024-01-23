import { useState } from "react"
import { Button, Image } from "semantic-ui-react"
import { BasicModal } from "@/layouts/BasicModal"
import { useAuth } from "@/hooks"
import styles from './Pub.module.css'
import { FaCheck, FaEdit, FaTimes, FaTrash } from "react-icons/fa"
import { Confirm } from "@/components/Layout/Confirm"
import { Blog } from "@/api"
import { Toaster, toast } from "sonner"
import Link from "next/link"
import { PubForm } from "../PubForm"

const delBlog = new Blog()

export function Pub(props) {

  const {pub, pubId, onReload} = props

  const {user} = useAuth()

  const [showEdit, setShowEdit] = useState(false)
  
  const onOpenCloseEdit = () => setShowEdit((prevState) => !prevState)

  const [showConfirm, setShowConfirm] = useState(false)
  
  const openCloseConfirm = () => setShowConfirm((prevState) => !prevState)

  const onDelete = async () => {
    try {
      await delBlog.delete(pubId)
      openCloseConfirm()
      //onReload()
      toast.warning(' ¡ Publicación eliminada exitosamente ! ')
    } catch (error) {
      console.error(error);
    }
  }

  return (
    
    <>
      <div className={styles.sideImage}>
        <div className={styles.imgContainerBlog}>
          <div className={styles.imgBoxBlog}>
            {
              pub.image.data.attributes.url ? <Image src={pub.image.data.attributes.url} /> : <span>Sin Imagen</span>
            }
          
          </div>   
        </div>
        <div className={styles.containerArticulo}>
         <h2>{pub.title}</h2>
         <p>{pub.content}</p>
         <Link href={`/blog/${pubId}`}>
            Ver detalles
         </Link> 
        
          {user ? (
            <div className={styles.boxActions}>
              <Button
                primary
                size='mini'
                onClick={onOpenCloseEdit}
              >
                <h4><FaEdit />Editar</h4>
              </Button>
              <Button
                secondary
                size='mini'
                onClick={openCloseConfirm}
              > 
                <h4><FaTimes />Eliminar</h4>
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
      content='¿ Estas seguro de eliminar la publicación ?'
    />

    <Toaster 
      theme="dark"
      position="bottom-center"
      duration={8000}
      visibleToasts={1}
      richColors
    />

    <BasicModal titleModalForm='Editar publicación' show={showEdit} onClose={onOpenCloseEdit}>
      <PubForm onOpenCloseEdit={onOpenCloseEdit} onReload={onReload} pubId={pubId} pub={pub} />
    </BasicModal>

    </>

  )
}
