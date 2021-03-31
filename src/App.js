import './App.css';
import scale from './scale'
import ufo from './ufoImage'
import drawGround from './ground'
import { React, useRef, useEffect } from 'react';

function App() {
  let ref = useRef();

  useEffect(() => {
    let canvas = ref.current;
    let context = canvas.getContext('2d');
    scale(canvas, context)
    context.clearRect(0, 0, canvas.width, canvas.height)
    drawGround(context)
    ufo(context)
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
