import './App.css'
import UfoAnimation from './Animation'
import scale from './scale'

import { React, useRef, useState, useEffect } from 'react'

function App() {
  let ref = useRef()
  let moveRight = useRef(true)
  const [ufoXCenter, setUfoXCenter] = useState(100)
  const [ufoYCenter, setUfoYCenter] = useState(100)
  const position = { ufoXCenter, setUfoXCenter, ufoYCenter, setUfoYCenter }

  useEffect(() => {
    let canvas = ref.current
    let context = canvas.getContext('2d')
    scale(canvas, context)
    UfoAnimation(canvas, context, moveRight, position)
  })

  // console.log('%c in App', 'color: hotpink; font-weight: bold;')
  // console.log(`assigned ref to`)
  // console.log(ref)

  return (
    <div className="App">
      <canvas
        ref={ref}
        style={{ width: '800px', height: '450px' }}
      />
    </div>
  );
}

export default App;
