import { useState } from 'react'
import { Image } from 'semantic-ui-react'
import { useAuth } from '@/hooks'
import { BasicLayout } from '@/layouts'
import { BasicModal } from '@/layouts/BasicModal'
import { EventForm, ListEvent } from '@/components/Event'
import styles from './event.module.css'
import { Add } from '@/components/Layout/Add'

export default function Eventos() {

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
          <EventForm onOpenClose={onOpenClose} />
        </BasicModal>

        <ListEvent reload={reload} onReload={onReload} />
        
      </div>
    </BasicLayout>
  )
}
