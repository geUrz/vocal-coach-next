import { useEffect, useState } from 'react'
import { map } from 'lodash'
import { Image } from 'semantic-ui-react'
import { BasicLayout } from '@/layouts'
import { Blog as blogApi } from '@/api'
import styles from './blog.module.css'

const blogCtrl = new blogApi()

export default function Blog() {

  const [blogs, setBlogs] = useState(null)

  useEffect(() => {
    (async () => {
      try {
        const response = await blogCtrl.getAll()
        setBlogs(response.data)
      } catch (error) {
          console.error(error)
      }
    })()
  }, [])

  return (
    <BasicLayout relative>
      <div className={styles.imgContainerBanner}>
        <Image src='/img/ev3.png' alt='ev3' />
        <div>
          <h1>eventos y conciertos</h1>
        </div>
      </div>
      <div className={styles.containerMainBlog}>
        {map(blogs, (blog) => (
          <div key={blog.id}>
            <div className={`${blog.attributes.sideImage}`}>
              <div className={styles.imgContainerBlog}>
                <div className={styles.imgBoxBlog}>
                  <Image src={blog.attributes.image.data.attributes.url} alt='vocalcoach' /> 
                </div>
              </div> 
              <div className={styles.containerArticulo}>
                <h2 className={`${blog.attributes.colorTitle}`}>{blog.attributes.title}</h2>
                <p>{blog.attributes.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </BasicLayout>
  )
}