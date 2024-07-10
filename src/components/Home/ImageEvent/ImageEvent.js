import { motion } from 'framer-motion'
import styles from './ImageEvent.module.css'

export function ImageEvent() {
  return (

    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.boxImage1}>
          <motion.img 
            src="/img/ev3.png"
            transition={{ duration: 2, ease: 'easeInOut' }}
            initial={{ translateY: '-100%', opacity: .1 }}
            whileInView={{ translateY: '0%' }}
            whileTap={{ opacity: 1 }}
            viewport={{ once: false, margin: '-25% 100% -40% 100%' }}
          />
        </div>
        <div className={styles.boxImage2}>
          <motion.img 
            src="/img/ev1.png"
            transition={{ duration: 2, ease: 'easeInOut' }}
            initial={{ translateX: '-100%', opacity: .1 }}
            whileInView={{ translateX: '0%' }}
            whileTap={{ opacity: 1 }}
            viewport={{ once: false, margin: '-35% 100% -40% 100%' }}
          />
          <motion.img 
            src="/img/ev1copy.png"
            transition={{ duration: 2, ease: 'easeInOut' }}
            initial={{ translateX: '100%', opacity: .1 }}
            whileInView={{ translateX: '0%' }}
            whileTap={{ opacity: 1 }}
            viewport={{ once: false, margin: '-35% 100% -40% 100%' }}
          />
        </div>
        <div className={styles.boxImage1}>
          <motion.img 
            src="/img/ev3.png"
            transition={{ duration: 2, ease: 'easeInOut' }}
            initial={{ translateY: '100%', opacity: .1 }}
            whileInView={{ translateY: '0%' }}
            whileTap={{ opacity: 1 }}
            viewport={{ once: false, margin: '-35% 100% -20% 100%' }}
          />
        </div>
      </div>
    </div>

  )
}
