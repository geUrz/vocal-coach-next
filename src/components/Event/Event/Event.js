import { useState } from 'react'
import { Image } from 'semantic-ui-react'
import { ModalImage } from '../ModalImage'
import { Gallery } from '../Gallery'
import styles from './Event.module.css'
import { FaChevronRight } from 'react-icons/fa'

export function Event(props) {

  const { title, description, image, img1, img2, img3 } = props

  const [show, setShow] = useState(false)
  
  const onOpenClose = () => setShow((prevState) => !prevState)

  return (

    <>
        <div className={styles.boxEv}>
          <div className={styles.img}>
            <Image src={`/img/${image}`} />
          </div>
          <div className={styles.titleDesc}>
            <h1>{title}</h1>
            <p>{description}</p>
          </div>
          <div className={styles.verImg} onClick={onOpenClose}>
            <h2>Ver imágenes</h2>
            <FaChevronRight />
          </div>
        </div>


      <ModalImage show={show} onClose={onOpenClose}>
        <Gallery onOpenClose={onOpenClose} img1={img1} img2={img2} img3={img3} />
      </ModalImage>

    </>

  )
}
