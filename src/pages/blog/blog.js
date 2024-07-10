import { BasicLayout } from '@/layouts'
import { useState } from 'react'
import { Add } from '@/components/Layout/Add'
import { BasicModal } from '@/layouts/BasicModal'
import { Image } from 'semantic-ui-react'
import styles from './blog.module.css'

export default function Blog() {

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
