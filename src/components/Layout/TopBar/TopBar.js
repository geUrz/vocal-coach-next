import Link from 'next/link'
import { Image } from 'semantic-ui-react'
import styles from './TopBar.module.css'


export function TopBar() {

  return (
    <div className={styles.topBar}>
      <div className={styles.logo}>
        <Link href='/'>
          <Image src='/img/logo.png' alt='Logo' />
        </Link>
      </div>
      <div className={styles.menu}>
        <Link href='/'>
          HOME
        </Link>
        <Link href='/blog'>
          BLOG
        </Link>
        <Link href='/nosotros'>
          NOSOTROS
        </Link>
        <Link href='/contactanos'>
          CONTÁCTANOS
        </Link>
      </div>
    </div>
  )
}
