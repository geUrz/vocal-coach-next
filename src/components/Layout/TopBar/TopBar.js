import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useAuth } from '@/hooks'
import { Image } from 'semantic-ui-react'
import { FaBars, FaHome, FaSignOutAlt, FaUser, FaWindowClose } from 'react-icons/fa'
import styles from './TopBar.module.css'


export function TopBar() {

  const {user, logout} = useAuth()

  const router = useRouter()

  const [menu, setMenu] = useState()

  const menuOpen = () => {
    setMenu(prevState => !prevState)
  }

  const logoutSignin = () => {
    //router.push('/')
    //onReload()
    logout()
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

      <div className={styles.iconBar}>
        <div  onClick={menuOpen}>
          {menu ? (
           <FaWindowClose />
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
          <Link href='/blog'>
            <div onClick={menuOpen}>
              Blog
            </div>
          </Link>
          <Link href='/nosotros'>
            <div onClick={menuOpen}>
              Nosotros
            </div>
          </Link>
          <Link href='/contactanos'>
            <div onClick={menuOpen}>
              Contáctanos
            </div>
          </Link>
        </div>   
        <div className={styles.iconUser}>
          <Link href='/join/signin'>
            <FaUser />
          </Link>
        </div>
      </div>
    </div>

    <div className={styles.iconLogout}>
      {user ? (
        <div onClick={logoutSignin}>
          <FaSignOutAlt />
        </div>
      ) : (
        ''
      )}
    </div>

  </>

  )
}
