import './App.css';
import scale from './scale'
import ufo from './ufoImage'
import { React, useRef, useEffect } from 'react';

function App() {
  let ref = useRef();

  useEffect(() => {
    let canvas = ref.current;
    let context = canvas.getContext('2d');
    scale(canvas, context)
    ufo(canvas, context)
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
