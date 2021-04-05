import React, { useState, useEffect, useRef } from 'react'
import drawGround from './ground'
import drawUfo from './ufoImage'

export default function UfoAnimation (canvas, context, moveRight, position) {
  // console.log(`%c in the UfoAnimation component`, 'color: red; font-weight: bold;')
  const { ufoXCenter, setUfoXCenter, ufoYCenter, setUfoYCenter } = position
  // console.log(`%c move right is ${moveRight.current}`, 'color: red;')
  // console.log(`%c ufoXCenter is ${ufoXCenter}`, 'color: red;')
  // console.log(`%c ufoYCenter is ${ufoYCenter}`, 'color: red;')

  // useEffect(() => {
    // console.log('%c in useEffect!', 'color: orange; font-weight: bold;')

    // context.clearRect(0, 0, canvas.width, canvas.height)

    /* requestId assigned requestAnimationFrame Id to pass to cancelAnimationFrame
        in the event of component unmounting between requests */
    let requestId
    const render = () => {
      console.log(`%c in the render function`, 'color: orange;')
      context.clearRect(0, 0, canvas.width, canvas.height)
      var details = {
        ufoXCenter: ufoXCenter,
        ufoYCenter: ufoYCenter,
        ufoLength: 100,
        ufoWidth: 30
      }
      drawGround(context)
      drawUfo(context, details)
      // requestId = setTimeout(() => { requestAnimationFrame(render) }, 1000)
      animate()
    }

    render()

    return () => {
      cancelAnimationFrame(requestId)
    }
  // })

    function animate() {
      // console.log(`%c animating...`, 'color: green;')
      // console.log(`%c moveRight is ${moveRight.current}`, 'color: green')
      checkDirection()
      if (moveRight.current === true) {
        setUfoXCenter(ufoXCenter + 1)
      } else {
        setUfoXCenter(ufoXCenter - 1)
      }
    }

    function checkDirection() {
      // console.log(`%c checking direction, moveRight is ${moveRight.current}`, 'color: blue')
      if (ufoXCenter === 700 || ufoXCenter === 99) {
        toggleMoveRight()
      }
    }

    function toggleMoveRight() {
      moveRight.current = !moveRight.current
    }

  return () => {
    // setTimeout(animate, 1000)
  }
}
