import { useEffect, useState } from "react"
import { map, size } from "lodash"
import { Blog } from "@/api"
import { Pub } from "../Pub"
import { Loading } from "@/components/Layout/Loading"
import { Image } from "semantic-ui-react"
import { BasicModal } from "@/layouts/BasicModal"
import { CreatePubForm } from "@/components/Blog/CreatePubForm"
import styles from './ListaPub.module.css'

const ctrlBlog = new Blog()

export function ListaPub(props) {

  const {reload, onReload, pubId, pub} = props

  const [show, setShow] = useState(false)

  const onOpenClose = () => setShow((prevState) => !prevState)

  const [blogs, setBlogs] = useState(null) 

  useEffect(() => {
    (async () => {
      try {
        const response = await ctrlBlog.getAll()
        setBlogs(response.data)
      } catch (error) {
          console.error(error)
      }
    })()
  }, [reload])

  return (
    
    <>
      {!blogs ? (
        <Loading />
      ) : 
      size(blogs) === 0 ? (
        <div className={styles.listEmpty}>
          <Image src='/img/hidelist.png' />
          <h1>¡ Sin publicación !</h1>
        </div>
      ) : (
        <div>
          {map(blogs, (pub) => (
              <Pub
                key={pub.id} 
                pubId={pub.id}
                pub={pub.attributes}  
                onReload={onReload}
              />
          ))}
        </div>
      )}

      <BasicModal titleModalForm='Crear publicación' show={show} onClose={onOpenClose}>
        <CreatePubForm onOpenClose={onOpenClose} onReload={onReload} pubId={pubId} pub={pub} />
      </BasicModal>

    </>

  )
}
