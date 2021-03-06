import './App.css'
import UfoAnimation from './Animation'
import { React, useRef, useState } from 'react'

function App() {
  let ref = useRef()
  // console.log('%c in App', 'color: hotpink; font-weight: bold;')
  // console.log(`assigned ref to`)
  // console.log(ref)

  UfoAnimation(ref)

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
