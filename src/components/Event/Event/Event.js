import { useState } from 'react'
import { Image } from 'semantic-ui-react'
import { ModalImage } from '../ModalImage'
import { Gallery } from '../Gallery'
import styles from './Event.module.css'
import { FaChevronRight } from 'react-icons/fa'

export function Event(props) {

  const { title, description, image } = props

  const [show, setShow] = useState(false)
  
  const onOpenClose = () => setShow((prevState) => !prevState)

  return (

    <>

      <div className={styles.section}>
        <div className={styles.container}>
          <div className={styles.img}>
            <Image src={`/img/${image}`} />
          </div>
          <div className={styles.titleDesc}>
            <h1>{title}</h1>
            <p>{description}</p>
          </div>
          <div className={styles.verImg} onClick={onOpenClose}>
            <h2>ver imágenes</h2>
            <FaChevronRight />
          </div>
        </div>
      </div>

      <ModalImage show={show} onClose={onOpenClose}>
        <Gallery onOpenClose={onOpenClose} />
      </ModalImage>

    </>

  )
}
