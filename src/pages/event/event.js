import { useState } from 'react'
import { Image } from 'semantic-ui-react'
import { BasicLayout } from '@/layouts'
import styles from './event.module.css'

export default function Eventos() {

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
