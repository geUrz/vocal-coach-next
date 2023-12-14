import { TopBar, Footer } from '@/components/Layout'
import styles from './BasicLayout.module.css'
import classNames from 'classnames'


export function BasicLayout(props) {

  const {
    children,
    relative= false
  } = props

  return (
    <>
      <TopBar />
        <div className={classNames({[styles.relative]: relative})}>
          {children}
        </div>
      <Footer />
    </>
  )
}
