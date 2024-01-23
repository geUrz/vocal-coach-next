import { useEffect, useState } from "react"
import { map, size } from "lodash"
import { Blog } from "@/api"
import { Loading } from "@/components/Layout/Loading"
import { Image } from "semantic-ui-react"
import styles from './ListaPub.module.css'
import Slider from "react-slick"

const ctrlBlog = new Blog()

export function ListaPub() {

  const [blogs, setBlogs] = useState(null)

  useEffect(() => {
    (async () => {
      try {
        const response = await ctrlBlog.getOne()
        setBlogs(response.data)
      } catch (error) {
        console.error(error)
      }
    })()
  }, [])

  return (

    <>
      {!blogs ? (
        <Loading />
      ) :
        size(blogs) === 0 ? (
          <div className={styles.listEmpty}>
            <Image src='/img/hidelist.png' />
            <h1>¡ Sin publicaciónes !</h1>
          </div>
        ) : (
          <div className={styles.containerMainPub}>
            <div className={styles.containerPub}>
              <Image src={blogs[0].attributes.image.data.attributes.url} />

            </div>
            <div className={styles.titlePub}>
              <h2>{blogs[0].attributes.title}</h2>
            </div>
          </div>
        )}

    </>

  )
}
