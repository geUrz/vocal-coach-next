import { FaPlus } from "react-icons/fa"
import styles from './Add.module.css'


export function Add(props) {

  const {add, onOpenClose} = props

  return (

    <div className={styles.containerAdd}>
      <div className={styles.iconBox} onClick={onOpenClose}>
        <FaPlus />
        <h1>{add}</h1>
      </div>
    </div>

  )
}
