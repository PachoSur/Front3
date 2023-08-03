import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBars/NavBar'
import Home from './components/Home'

function App() {
  const [count, setCount] = useState(0)

  let titulo1 = 'Inicio'


  return (
    <div className='App'>
      <NavBar/>
      <Home/>
    </div>
  )

}

export default App
