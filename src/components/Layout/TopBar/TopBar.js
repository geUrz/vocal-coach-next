import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useAuth } from '@/hooks'
import { Image } from 'semantic-ui-react'
import { FaBars, FaHome, FaSignOutAlt, FaTimes, FaUser } from 'react-icons/fa'
import styles from './TopBar.module.css'


export function TopBar() {

  const {user, logout} = useAuth()

  const router = useRouter()

  const [menu, setMenu] = useState()

  const menuOpen = () => {
    setMenu(prevState => !prevState)
  }

  const toSignin = () => {
    router.push('/join/signin')
    //onReload()
  }

  const toAccount = () => {
    router.push('account')
    //onReload()
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
        <div className={styles.iconUser}>
          {user ? (
            <FaUser onClick={toAccount}/>
          ) : (
            <FaUser onClick={toSignin} />
          )}
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
