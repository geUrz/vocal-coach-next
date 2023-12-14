import { useState, useEffect } from "react"
import Link from "next/link"
import { map } from "lodash"
import { BasicLayout } from "@/layouts"
import { Image } from "semantic-ui-react"
import { Bloghome } from "@/api"
import styles from './home.module.css'
import { useAuth } from "@/hooks"
import { BoxAdd } from "@/components/BoxAdd"

const ctrlBlog = new Bloghome()

export default function Home() {

  const {user} = useAuth()
  const [blogs, setBlogs] = useState(null) 

  useEffect(() => {
    (async () => {
      try {
        const response = await ctrlBlog.getBloghome()
        setBlogs(response.data)
      } catch (error) {
          console.error(error)
      }
    })()
  }, [])

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
        <h1>Eventos y conciertos de <span> Vocal Coach</span></h1>
        <div className={styles.imgContainerBlog}>
          {map (blogs, (blog) => (
            <Link href='/blog'>
            <div key={blog.id}>
              <div className={styles.imgBoxBlog}>
                <Image src={blog.attributes.image.data.attributes.url} alt='ev1' />
              </div>
              <div className={styles.containerArticulo}>
                <h2>{blog.attributes.title}</h2>
                <p>{blog.attributes.content}</p>
              </div>
            </div>
            </Link>
          ))}
        </div>
        <h1>¡ Visita nuestro <Link href='/blog'><span>Blog</span></Link> para ver todos los eventos !</h1>
        {user ? (
          <div className={styles.boxAdd}>
            <BoxAdd />
          </div>
        ) : (
          ''
        )}
      </div>
    </BasicLayout>
  )
}
