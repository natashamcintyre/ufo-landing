import './App.css';
import scale from './scale.js'
import { React, useRef, useEffect } from 'react';

function App() {
  let ref = useRef();
  let ufoXCenter = 100
  let ufoYCenter = 100

  useEffect(() => {
    let canvas = ref.current;
    let context = canvas.getContext('2d');
    scale(canvas, context)

    var ufoColour = context.createLinearGradient(0, 0, 150, 150)
    ufoColour.addColorStop(0, 'grey')
    ufoColour.addColorStop(1, 'silver')

    context.clearRect(0, 0, canvas.width, canvas.height)
    context.beginPath();
    context.ellipse(ufoXCenter, ufoYCenter, 30, 100, Math.PI * 9 / 20, 0, 2 * Math.PI)
    context.fillStyle = ufoColour
    context.fill()
    context.strokeStyle = 'gray'
    context.stroke()

    context.beginPath()
    context.ellipse(ufoXCenter, ufoYCenter, 6, 20, Math.PI * 9 / 20, 0, 2 * Math.PI)
    context.fillStyle = '#505050'
    context.fill()
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
