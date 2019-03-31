import React from 'react'
import styles from './styles.scss'

const { contain, content } = styles

const Contain = ({ children }) => (
  <div className={contain}>
    <div className={content}>{children}</div>
  </div>
)

export default Contain
