import Link from 'next/link'
import { Image } from 'semantic-ui-react'
import styles from './Footer.module.css'
import { FaFacebook, FaInstagram, FaMapMarkerAlt } from 'react-icons/fa'

export function Footer(props) {

  const { noFooter = true } = props

  return (

    <>

      {noFooter ? (

        <div className={styles.containerFooter}>
          <div className={styles.containerSucursal}>
            <FaMapMarkerAlt />
            <div className={styles.titleSucursal}>
              <h1>Nuestras ubicaciónes</h1>
            </div>
            <div className={styles.boxSucursal}>
              <div className={styles.direccionSucursal}>
                <h4>Mexicali</h4>
                <h4>Calz. Cuauhtémoc 1086-local 3,</h4>
                <h4>Prohogar, 21240 Mexicali, B.C.</h4>
                <h4>Cel (686) 134.93.99</h4>
              </div>
              <div className={styles.divisionSucursal}></div>
              <div className={styles.direccionSucursal}>
                <h4>San Luis</h4>
                <h4>Calz. Cuauhtémoc 1086-local 3,</h4>
                <h4>Prohogar, 21240 Mexicali, B.C.</h4>
                <h4>Cel (686) 134.93.99</h4>
              </div>
            </div>
          </div>
          <div className={styles.containerSiguenos}>
            <div className={styles.titleSiguenos}>
              <h4>¡ Síguenos en nuestras redes sociales !</h4>
            </div>
            <div className={styles.boxIcons}>
              <Link target='blank' href='https://facebook.com/vocalcoachescueladecanto/'>
                <FaFacebook />
              </Link>
              <FaInstagram /> 
            </div>
          </div>
          <div className={styles.copy}>
            <h4>&copy; 2023 VOCAL COACH</h4>
          </div>
        </div>

      ) : ('')}

    </>

  )
}
