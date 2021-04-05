import React, { useState, useEffect } from 'react'
import drawGround from './ground'
import drawUfo from './ufoImage'
import scale from './scale'

export default function UfoAnimation (ref) {
  const [ufoXCenter, setUfoXCenter] = useState(100)
  const [ufoYCenter, setUfoYCenter] = useState(100)

  useEffect(() => {
    let canvas = ref.current
    let context = canvas.getContext('2d')
    scale(canvas, context)
    // context.clearRect(0, 0, canvas.width, canvas.height)

    /* requestId assigned requestAnimationFrame Id to pass to cancelAnimationFrame
        in the event of component unmounting between requests */
    let requestId
    const render = () => {
      drawGround(context)
      drawUfo(context)
      requestId = requestAnimationFrame(render)
    }

    render()

    return () => {
      cancelAnimationFrame(requestId)
    }
  })
}
