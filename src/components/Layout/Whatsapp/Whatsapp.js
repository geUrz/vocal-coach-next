import { Image } from 'semantic-ui-react'
import styles from './Whatsapp.module.css'
import Link from 'next/link'
import { FaWhatsapp } from 'react-icons/fa'

export function Whatsapp() {
  return (
  
    <div className={styles.iconWhats}>
      <Link target='blank' href='https://wa.me/526861349399'>
        <FaWhatsapp />
      </Link>
    </div>
  

  )
}
