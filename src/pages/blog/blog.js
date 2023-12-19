import { useEffect, useState } from 'react'
import { Image } from 'semantic-ui-react'
import { useAuth } from '@/hooks'
import { BasicLayout } from '@/layouts'
import { FaPlus } from 'react-icons/fa'
import { BasicModal } from '@/layouts/BasicModal'
import { CreatePubForm } from '@/components/Blog/CreatePubForm'
import { ListaPub } from '@/components/Blog'
import styles from './blog.module.css'

export default function Blog() {

  const [show, setShow] = useState(false)
  
  const onOpenClose = () => setShow((prevState) => !prevState)

  const {user} = useAuth()

  const [reload, setReload] = useState(false)

  const onReload = () => setReload((prevState) => !prevState)

  return (
    <BasicLayout relative>
      <div className={styles.imgContainerBanner}>
        <Image src='/img/ev3.png' alt='ev3' />
        <div>
          <h1>eventos y conciertos</h1>
        </div>
      </div>
      <div className={styles.containerMainBlog}>
        
        {user ? (
          <div className={styles.containerAdd}>
            <div className={styles.iconBox} onClick={onOpenClose}>
              <FaPlus />
              <h1>Crear nueva publicación</h1>
            </div>
          </div>
        ) : (
          ''
        )}

        <BasicModal 
          titleModalForm='Crear publicación' 
          show={show} 
          onClose={onOpenClose}>
          <CreatePubForm onOpenClose={onOpenClose} />
        </BasicModal>

        <ListaPub reload={reload} onReload={onReload} />
        
      </div>
    </BasicLayout>
  )
}

/* {!blogs ? (
  <Loading />
) :
  size(blogs) === 0 ? (
    <div className={styles.listEmpty}>
      <Image src='/img/hidelist.png' />
      <h1>¡ Blog vacio !</h1>
    </div> 
) : (
  map(blogs, (blog) => (
    <div key={blog.id}>
      <div className={`${blog.attributes.sideImage}`}>
        <div className={styles.imgContainerBlog}>
          <div className={styles.imgBoxBlog}>
            <Image src={blog.attributes.image.data.attributes.url} alt='vocalcoach' /> 
          </div>
        </div> 
        <div className={styles.containerArticulo}>
          <h2 className={`${blog.attributes.colorTitle}`}>{blog.attributes.title}</h2>
          <p>{blog.attributes.content}</p>
        </div>
      </div>
      <div className={styles.boxAdd}>
        {user ? (
          <BoxActionsBlog />
        ) : (
          ''
        )}
      </div>
    </div>
  ))
)} */