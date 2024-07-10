import { useState } from 'react'
import Link from 'next/link'
import { Image } from 'semantic-ui-react'
import { FaBars, FaHome, FaTimes } from 'react-icons/fa'
import styles from './TopBar.module.css'


export function TopBar() {

  const [menu, setMenu] = useState()

  const menuOpen = () => {
    setMenu(prevState => !prevState)
  }

  return (

    <>
    <div className={styles.containerMenu}>
      <div className={styles.logo}>
        <Link href='/'>
          <Image src='/img/logo.png' alt='Logo' />
        </Link>
      </div>

      <div className={styles.menu}>
        <Link href='/'>
          HOME
        </Link>
        <Link href='/event'>
          EVENTOS
        </Link>
        <Link href='/blog'>
          BLOG
        </Link>
        <Link href='/about'>
          Qué es VocalCoach ?
        </Link>
      </div>

      <div className={styles.iconBar}>
        <div  onClick={menuOpen}>
          {menu ? (
           <FaTimes />
          ) : (
            <FaBars />
          )}
        </div>
      </div>

      <div className= {styles.containerMenuSide} style={{left : menu ? '0' : '-100%'}}> 
        <Link href='/'>
          <div className={styles.topMenuSide} onClick={menuOpen}>
            <FaHome />
          </div>   
        </Link>
        <div className={styles.listaMenuSide}>
        <Link href='/event'>
            <div onClick={menuOpen}>
              Eventos
            </div>
          </Link>
          <Link href='/blog'>
            <div onClick={menuOpen}>
              Blog
            </div>
          </Link>
          <Link href='/about'>
            <div onClick={menuOpen}>
              Qué es VocalCoach ?
            </div>
          </Link>
        </div> 
      </div>
    </div>

  </>

  )
}
