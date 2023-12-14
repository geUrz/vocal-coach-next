import { useState, useEffect } from 'react'
import { map } from 'lodash'
import { useAuth } from '@/hooks'
import { BasicLayout } from '@/layouts'
import { Nosotros as nosotrosApi } from '@/api'
import { Image } from 'semantic-ui-react'
import styles from './nosotros.module.css'
import { BoxAdd } from '@/components/BoxAdd'

const ctrlNosotros = new nosotrosApi()

export default function Nosotros() {

  const {user} = useAuth()

  const [nosotros, setNosotros] = useState(null)

  useEffect(() => {
    (async() => {
      try {
        const response = await ctrlNosotros.getAll()
        setNosotros(response.data)
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
        {map(nosotros, (nosotro) => (
          <div key={nosotro.id}>
              <div> 
                <div className={styles.imgContainerNosotros}>
                  <div className={styles.imgBoxNosotros}>
                    <Image src={nosotro.attributes.imgnosotros.data.attributes.url} alt='vocalcoach' /> 
                  </div>
                </div>
                <div className={styles.containerArticulo}>
                  <h2>Vocal Coach</h2>
                  <p>{nosotro.attributes.parrafonosotros}</p>
                </div> 
                <div className={styles.boxAdd}>
                  {user ? (
                    <BoxAdd />
                  ) : (
                    ''
                  )}
                </div>
              </div>
              <div>
                <div className={styles.imgContainerNosotros}>
                  <div className={styles.imgBoxNosotros}>
                    <Image src={nosotro.attributes.imgcoach.data.attributes.url} alt='vocalcoach' /> 
                  </div>
                </div> 
                <div className={styles.containerArticulo}>
                  <h2>nuestro coach</h2>
                  <p>{nosotro.attributes.parrafocoach}</p>
                </div> 
                <div className={styles.boxAdd}>
                  {user ? (
                    <BoxAdd />
                  ) : (
                    ''
                  )}
                </div>
              </div>
          </div>
        ))}
      </div>
      <div className={styles.containerMainInstalaciones}>
        <h1>Nuestras instalaciones</h1>
        <div className={styles.containerParrafoInstalaciones}>
          <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos.</p>
        </div>
        {map(nosotros, (nosotro) => (
          <div key={nosotro.id}>
              <div>
                <div className={styles.imgContainerInstalaciones}>
                  <div className={styles.imgBoxInstalaciones}>
                    <Image src={nosotro.attributes.imgnosotros.data.attributes.url} alt='vocalcoach' /> 
                  </div>
                </div> 
              </div>
          </div>
        ))}
        <div className={styles.boxAdd}>
          {user ? (
            <BoxAdd />
          ) : (
            ''
          )}
        </div>
      </div>
    </BasicLayout>
  )
}
