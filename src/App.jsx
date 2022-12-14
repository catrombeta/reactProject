import './App.css'

import Navbar from './components/Navbar'
import Hero from "./components/Hero"
import Main from './components/Main'
import Clients from './components/Clients'
import Footer from "./components/Footer"

import {useState, useEffect} from 'react'



function App() {
  return (
    <div className="App">
      <div>
        <Navbar />
        <Hero />
        <div className="container">
          <Main />
          <Clients />
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default App
