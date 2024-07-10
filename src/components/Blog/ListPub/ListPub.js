import { useEffect, useState } from "react"
import { map, size } from "lodash"
import { Blog } from "@/api"
import { Pub } from "./Pub"
import { Loading } from "@/components/Layout/Loading"
import { BasicModal } from "@/layouts/BasicModal"
import { PubForm } from "@/components/Blog/PubForm"
import { ListEmpty } from "@/components/Layout/ListEmpty"

const ctrlBlog = new Blog()

export function ListPub(props) {

  const {reload, onReload} = props

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
        <ListEmpty />
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
        <PubForm onOpenClose={onOpenClose} onReload={onReload} pubId={pubId} pub={pub} />
      </BasicModal>

    </>

  )
}
