import React from 'react'
import posed from 'react-pose'
import styles from './styles'

const Text = posed.p({
  hidden: {
    opacity: 0,
    margin: '0px 0px',
    height: '0px'
  },
  default: {
    opacity: 1
  }
})

const Message = ({ message, hidden }) => {
  return (
    <Text pose={hidden ? 'hidden' : 'default'} className={styles.message}>
      {message}
    </Text>
  )
}

export default Message
