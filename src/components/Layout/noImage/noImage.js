import { FaFileImage, FaImage, FaImages, FaRegFileImage, FaRegImage, FaSlash } from "react-icons/fa"
import styles from './noImage.module.css'


export function NoImage() {
  return (

    <div className={styles.noImage}>
      <FaFileImage />
    </div>

  )
}
