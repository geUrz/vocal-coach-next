import { FaEdit, FaTrash } from 'react-icons/fa'
import { Button } from 'semantic-ui-react'
import styles from './BoxActions.module.css'

export function BoxActions() {
  return (
    
    <div className={styles.boxActions}>
      <Button
        secondary
        size='mini'
      >
        <FaEdit />
        Editar
      </Button>
      <Button
        negative
        size='mini'
      >
        <FaTrash />
        Eliminar
      </Button>
    </div>

  )
}
