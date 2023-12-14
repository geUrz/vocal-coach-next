import { FaEdit } from 'react-icons/fa'
import { Button } from 'semantic-ui-react'
import styles from './BoxAdd.module.css'

export function BoxAdd() {
  return (
    <div className={styles.boxAdd}>
      <Button
        secondary
        size='mini'
      >
        <FaEdit />
        Editar
      </Button>
    </div>
  )
}
