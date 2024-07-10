import { useState } from 'react'
import { Image } from 'semantic-ui-react'
import { BasicLayout } from '@/layouts'
import { BasicModal } from '@/layouts/BasicModal'
import { EventForm, ListEvent } from '@/components/Event'
import styles from './event.module.css'
import { Add } from '@/components/Layout/Add'

export default function Eventos() {

  const [show, setShow] = useState(false)
  
  const onOpenClose = () => setShow((prevState) => !prevState)

  return (
    <BasicLayout relative>
      <div className={styles.imgContainerBanner}>
        <Image src='/img/ev3.png' alt='ev3' />
        <div>
          <h1>eventos y conciertos</h1>
        </div>
      </div>
      <div className={styles.containerMainBlog}>
        
      </div>
    </BasicLayout>
  )
}
