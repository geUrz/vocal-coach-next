import { motion } from 'framer-motion'
import styles from './VoiceTech.module.css'

export function VoiceTech(props) {

  const { title, description } = props

  return (

    <div className={styles.container}>
      <motion.h1 
        className={styles.title}
        transition={{ duration: 0.2, ease: 'easeInOut' }}
        whileInView={{
          color: '#00c7da',
        }}
        viewport={{ once: false, margin: '-25% 100% -50% 100%' }}
      >
        {title}
      </motion.h1> 
      <motion.div
        className={styles.sectionBox}
        transition={{ duration: 1, ease: 'easeInOut' }}
        whileInView={{
          width: '280px',
          height: '1px',
          background: '#ad00ec',
        }}
        viewport={{ once: false, margin: '-25% 100% -50% 100%' }}
      />
      <div className={styles.box}>
        <motion.p
          transition={{ duration: 0.5 }}
          whileInView={{
            color: '#fff',
          }}
          viewport={{ once: false, margin: '-25% 100% -50% 100%' }}
        >
          {description}
        </motion.p>
      </div>
    </div>

  )
}
