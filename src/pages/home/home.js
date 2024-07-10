import Link from "next/link"
import { BasicLayout } from "@/layouts"
import { Image } from "semantic-ui-react"
import { ImageEvent } from "@/components/Home"
import styles from './home.module.css'
import { VoiceTech } from "@/components/Home"

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

      <div className={styles.containerVoiceTech}>

        <VoiceTech
          title='SOLFEO'
          description='Lorem Ipsum is simply dummy text of the printing and typesetting industry'
        />

        <VoiceTech
          title='RESPIRACIÓN'
          description='Lorem Ipsum is simply dummy text of the printing and typesetting industry'
        />
        <VoiceTech
          title='FALSETE'
          description='Lorem Ipsum is simply dummy text of the printing and typesetting industry'
        />
        <VoiceTech
          title='DICCIÓN'
          description='Lorem Ipsum is simply dummy text of the printing and typesetting industry'
        />

        <div className={styles.boxYmas}>
          <div><h1>¡ Y más !</h1></div>
        </div>

      </div>

      <div className={styles.containerMainBlog}>
        <h1>Eventos mas recientes de</h1>
        <h2> Vocal Coach</h2>

        <ImageEvent />

        <h1>¡ Haz click <Link href='/event'><span>aqui</span></Link> para ver todos los eventos !</h1>
      </div>

    </BasicLayout>
  )
}
