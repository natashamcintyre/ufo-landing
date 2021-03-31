import './App.css'
import scale from './scale'
import drawUfo from './ufoImage'
import drawGround from './ground'
import { React, useRef, useEffect } from 'react'

function App() {
  let ref = useRef();

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
