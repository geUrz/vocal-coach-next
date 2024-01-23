import Link from "next/link"
import { BasicLayout } from "@/layouts"
import { Image } from "semantic-ui-react"
import { ListaPub } from "@/components/BlogHome"
import styles from './home.module.css'

export default function Home() {  

  return (
    <BasicLayout relative>

      <div className={styles.imgContainerBanner}>
        <Image src='/img/wallpaper.png' alt='wallpaper' />
      </div>

      <div className={styles.titleVoz}>
        <h1>En <span className={styles.titleVoz1}>Vocal Coach</span> aprenderás las técnicas</h1>
        <h1>necesarias para
        <span className={styles.titleVoz2}> ¡Cantar Mejor!.</span></h1> 
      </div>

      <div className={styles.tecnicasVoz}>
        <div className={styles.tecnicasVozBox}>
          <div className={styles.boxTitle1}><h1>APOYO</h1></div>
          <div></div>
          <div className={styles.box1}><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.,,,,,,iiiiiiii</p></div>
        </div>
        <div className={styles.tecnicasVozBox}>
          <div className={styles.boxTitle2}><h1>RESPIRACIÓN</h1></div>
          <div></div>
          <div className={styles.box2}><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p></div>
        </div>
        <div className={styles.tecnicasVozBox}>
          <div className={styles.boxTitle1}><h1>FALSETE</h1></div>
          <div></div>
          <div className={styles.box1}><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p></div>
        </div>
        <div className={styles.tecnicasVozBox}>
          <div className={styles.boxTitle2}><h1>DICCIÓN</h1></div>
          <div></div>
          <div className={styles.box2}><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p></div>
        </div>
        <div className={styles.boxYmas}>
          <div><h1>¡ Y más !</h1></div>
        </div>
      </div>

      <div className={styles.containerMainBlog}>
        <h1>Eventos mas recientes de</h1>
        <h2> Vocal Coach</h2>

          <ListaPub />
          
        <h1>¡ Haz click <Link href='/event'><span>aqui</span></Link> para ver todos los eventos !</h1>
      </div>
      
    </BasicLayout>
  )
}
