import './App.css'

import Navbar from './components/Navbar'
import Hero from "./components/Hero"
import Main from './components/Main'
import {useState, useEffect} from 'react'



function App() {
  return (
    <div className="App">
      <div>
        <Navbar />
        <Hero />
        <Main />
      </div>
    </div>
  )
}

export default App
