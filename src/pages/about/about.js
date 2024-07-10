import { useState, useEffect } from 'react'
import { map } from 'lodash'
import { BasicLayout } from '@/layouts'
import { Image } from 'semantic-ui-react'
import { About as AboutApi } from '@/api'
import styles from './about.module.css'

const aboutCtrl = new AboutApi()

export default function About() {

  const [abouts, setAbouts] = useState(null)

  useEffect(() => {
    (async() => {
      try {
        const response = await aboutCtrl.getAll()
        setAbouts(response.data)
      } catch (error) {
          console.error(error)
      }
      })()
  }, [])


  return (
    <BasicLayout relative>
      <div className={styles.imgContainerBanner}>
        <Image src='/img/ev3.png' alt='ev3' />
        <div>
          <h1>¿ Qué es <span>Vocal Coach</span> ?</h1>
        </div>
      </div>
      <div className={styles.containerMainNosotros}>
       
      </div>
      <div className={styles.containerMainInstalaciones}>
        <h1>Nuestras instalaciones</h1>
        <div className={styles.containerParrafoInstalaciones}>
          <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos.</p>
        </div>

    
         
      </div>
    </BasicLayout>
  )
}
