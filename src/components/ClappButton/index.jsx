import React, { useState, useEffect } from 'react'
import posed from 'react-pose'
import { easing } from 'popmotion'
import styles from './styles'

const { cubicBezier } = easing
const materialEasing = cubicBezier(0.25, 0.8, 0.25, 1)

const Circle = posed.div({
  default: {
    scale: 1,
    boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)'
  },
  pressed: {
    scale: 0.7,
    boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
    transition: {
      scale: {
        duration: 100
      },
      boxShadow: {
        duration: 100,
        ease: materialEasing
      }
    }
  }
})

const ClappButton = () => {
  const [pressed, setPressed] = useState(false)

  useEffect(() => {
    console.log(pressed)
  })

  function mouseDown() {
    setPressed(true)
  }

  function mouseUp() {
    setPressed(false)
  }

  function mouseLeave() {
    setPressed(false)
  }

  return (
    <Circle
      onMouseDown={() => mouseDown()}
      onMouseUp={() => mouseUp()}
      onMouseLeave={() => mouseLeave()}
      pose={pressed ? 'pressed' : 'default'}
      className={styles.circle}
    />
  )
}

export default ClappButton
