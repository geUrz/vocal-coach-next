import { useEffect, useState } from 'react'
import { map } from 'lodash'
import { Image } from 'semantic-ui-react'
import { useAuth } from '@/hooks'
import { BasicLayout } from '@/layouts'
import { Blog as blogApi } from '@/api'
import { FaPlus } from 'react-icons/fa'
import styles from './blog.module.css'
import { BoxAdd } from '@/components/BoxAdd'
import { BoxActions } from '@/components/BoxActions'

const blogCtrl = new blogApi()

export default function Blog() {

  const {user} = useAuth()

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
        
        {user ? (
          <div className={styles.containerAdd}>
            <div className={styles.iconBox}>
              <FaPlus />
              <h1>Agregar nuevo evento</h1>
            </div>
          </div>
        ) : (
          ''
        )}

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
            <div className={styles.boxAdd}>
              {user ? (
                <BoxActions />
              ) : (
                ''
              )}
            </div>
          </div>
        ))}
      </div>
    </BasicLayout>
  )
}