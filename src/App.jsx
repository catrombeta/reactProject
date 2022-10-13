import { useState } from 'react'
import gato from './assets/gato.jpg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App container-fluid bg-primary">
      <div>
        <a href="https://reactjs.org" target="_blank">
          <img src={gato} className="gato" alt="React logo" />
        </a>
      </div>
      <h1>FUCK OFF</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 2)}>
          count is {count}
        </button>
        {/* <Nabar />
        <Main /> */}

      </div>
    </div>
  )
}

export default App
