import { useState } from "react"
import { Image } from "semantic-ui-react"
import { useAuth } from "@/hooks"
import styles from './Pub.module.css'
import Link from "next/link"

export function Pub(props) {

  const {pub} = props

  return (
    
    <>
       
      <div className={styles.ContainerBlog}>
      <Link href='/blog'>
        <div>
          <div className={styles.imgBoxBlog}>
            <Image src={pub.image.data.attributes.url} />
          </div> 
          <div className={styles.containerArticulo}>
            <h2>{pub.title}</h2>
          </div>
        </div>
      </Link>
    </div>

    </>

  )
}
   