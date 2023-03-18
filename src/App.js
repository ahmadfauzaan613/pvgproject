import React from 'react'
import Home from './Pages/Home'
import { Dots } from 'react-preloaders2'
function App() {
  return (
    <React.Fragment>
      <Home />
      <Dots color={'#545DFF'} time={1300} />
    </React.Fragment>
  )
}

export default App
