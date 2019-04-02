import React, { useState, useEffect } from 'react'
import posed from 'react-pose'
import { easing } from 'popmotion'
import styles from './styles'
import loader from './loader.svg'
import { loadSounds, playSounds, debugSounds } from '../../audio'
import Message from '../Message'

const { cubicBezier } = easing
const materialEasing = cubicBezier(0.25, 0.8, 0.25, 1)

const Spinner = posed.img({
  hidden: {
    opacity: 0
  },
  default: {
    opacity: 1
  }
})

const Circle = posed.div({
  hidden: {
    scale: 0,
    boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)'
  },
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
  const [hidden, setHidden] = useState(false)
  const [touch, setTouch] = useState(false)
  const [soundsLoaded, setSoundsLoaded] = useState(false)

  function pointerDown() {
    if (!soundsLoaded) {
      setHidden(true)
      loadSounds()
        .then(() => {
          setSoundsLoaded(true)
          setHidden(false)
        })
        .catch(() => {
          //TODO: implement error page
        })
    }
  }

  function touchStart() {
    setTouch(true)
    setPressed(true)
    playSounds()
  }

  function touchEnd() {
    setPressed(false)
  }

  function mouseDown() {
    if (!touch) {
      setPressed(true)
      playSounds()
    }
  }

  function mouseUp() {
    setPressed(false)
  }

  function mouseLeave() {
    setPressed(false)
  }

  let pose = 'default'
  if (hidden) {
    pose = 'hidden'
  }
  if (pressed) {
    pose = 'pressed'
  }

  return (
    <>
      <Message message={'Press to start'} hidden={hidden || soundsLoaded} />
      <Spinner
        pose={!hidden || soundsLoaded ? 'hidden' : 'default'}
        className={styles.spinner}
        src={loader}
      />
      <Circle
        onTouchStart={() => touchStart()}
        onTouchEnd={() => touchEnd()}
        onMouseDown={() => mouseDown()}
        onMouseUp={() => mouseUp()}
        onMouseLeave={() => mouseLeave()}
        onPointerDown={() => pointerDown()}
        pose={pose}
        className={styles.circle}
      />
    </>
  )
}

export default ClappButton
