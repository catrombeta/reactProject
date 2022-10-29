import './App.css'

import Navbar from './components/Navbar'
import Main from './components/Main'
import {useState, useEffect} from 'react'



function App() {
  return (
    <div className="App">
      <div>
        <Navbar />
        <Main />
      </div>
    </div>
  )
}

export default App
