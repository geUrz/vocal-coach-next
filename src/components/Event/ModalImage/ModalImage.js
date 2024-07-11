import { Modal } from "semantic-ui-react"
import styles from './ModalImage.module.css'

export function ModalImage(props) {

  const {children, show} = props

  return (

    <>
      <Modal open={show} size="small" className={styles.modal}>
        <Modal.Header className={styles.header}>
        </Modal.Header>
        <Modal.Content className={styles.content}>{children}</Modal.Content>
      </Modal>
    </>

  )
}
