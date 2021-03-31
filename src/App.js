import './App.css';
import { React, useRef } from 'react';

function App() {
  let ref = useRef();
  return (
    <div className="App">
      <canvas
        ref={ref}
        style={{ width: '800px', height: '450px' }}></canvas>
    </div>
  );
}

export default App;
