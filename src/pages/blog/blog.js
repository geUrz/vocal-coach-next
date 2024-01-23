import { BasicLayout } from '@/layouts'
import { ListPub, PubForm } from '@/components/Blog'
import { useState } from 'react'
import { useAuth } from '@/hooks'
import { Add } from '@/components/Layout/Add'
import { BasicModal } from '@/layouts/BasicModal'
import { Image } from 'semantic-ui-react'
import styles from './blog.module.css'

export default function Blog() {

  const [show, setShow] = useState(false)
  
  const onOpenClose = () => setShow((prevState) => !prevState)

  const {user} = useAuth()

  const [reload, setReload] = useState(false)

  const onReload = () => setReload((prevState) => !prevState)

  return (
    <BasicLayout relative onReload={onReload}>
      
      <div className={styles.imgContainerBanner}>
        <Image src='/img/ev3.png' alt='ev3' />
        <div>
          <h1>eventos y conciertos</h1>
        </div>
      </div>
      <div className={styles.containerMainBlog}>
        
        {user ? (
          <Add add='Crear nuevo evento' onOpenClose={onOpenClose} />
        ) : (
          ''
        )}

        <BasicModal
          titleModalForm='Crear evento' 
          show={show} 
          onClose={onOpenClose}>
          <PubForm onOpenClose={onOpenClose} />
        </BasicModal>

        <ListPub reload={reload} onReload={onReload} />
        
      </div>

    </BasicLayout>
  )
}
