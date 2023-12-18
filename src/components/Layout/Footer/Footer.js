import Link from 'next/link'
import { Image } from 'semantic-ui-react'
import styles from './Footer.module.css'

export function Footer() {
  return (
    <div className={styles.containerFooter}>
      <div className={styles.containerSucursal}>
        <div className={styles.titleSucursal}>
          <h1>Nuestras ubicaciónes</h1>
        </div>
        <div className={styles.boxSucursal}>
          <div className={styles.direccionSucursal}>
            <h4>Mexicali</h4>
            <h4>Calz. Cuauhtémoc 1086-local 3,</h4>
            <h4>Prohogar, 21240 Mexicali, B.C.</h4>
          </div>
          <div className={styles.divisionSucursal}></div>
          <div className={styles.direccionSucursal}>
            <h4>San Luis</h4>
            <h4>Calz. Cuauhtémoc 1086-local 3,</h4>
            <h4>Prohogar, 21240 Mexicali, B.C.</h4>
          </div>
        </div>
      </div>
      <div className={styles.containerSiguenos}>
        <div className={styles.titleSiguenos}>
          <h4>¡ Síguenos en nuestras redes sociales !</h4>
        </div>
        <div className={styles.boxSiguenos}>
          <Link target='blank' href='https://facebook.com/vocalcoachescueladecanto/'>
            <Image src='/img/facebook.svg' alt='facebook' />
          </Link>
          <Image src='/img/instagram.svg' alt='instagram' />
        </div>
      </div>
      <div className={styles.copy}>
        <h4>&copy; 2023 VOCAL COACH</h4>
      </div>
    </div>
  )
}
