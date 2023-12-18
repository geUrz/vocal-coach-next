import { useState } from 'react'
import { TopBar, Footer } from '@/components/Layout'
import classNames from 'classnames'
import styles from './BasicLayout.module.css'


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
