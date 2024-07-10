import { TopBar, Footer, Whatsapp } from '@/components/Layout'
import classNames from 'classnames'
import styles from './BasicLayout.module.css'


export function BasicLayout(props) {

  const {
    children,
    relative= false,
    noFooter
  } = props

  return (
    <>
      <TopBar />
        <div className={classNames({[styles.relative]: relative})}>
          {children}
        </div>
      <Whatsapp />
      <Footer noFooter={noFooter} />
    </>
  )
}
