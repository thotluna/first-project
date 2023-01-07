import React from 'react'

import styles from './input-layout.module.css'

export default function InputLayout(props) {
  return (
    <div className={styles.container}>{props.children}</div>
  )
}
