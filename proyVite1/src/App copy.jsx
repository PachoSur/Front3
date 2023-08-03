import { useState } from 'react'
import './App.css'
import ClassComponent from './components/ClassComponent'
import FuncComponent from './components/FuncComponent'
import HolaComponent from './components/HolaComponent'
import UserCard from './components/UserCard'

function App() {
  const [count, setCount] = useState(0)

  let titulo1 = 'Inicio'


  return (
    <>
      <ClassComponent/>

      {/* <OtroComponent/> */}

      <FuncComponent titulo={titulo1} descripcion={'Esta es la descripción del inicio'}/>

      <HolaComponent nombre={"Juan"}/>

      <div>
      <h2>Users</h2>
      <UserCard name="John Doe" age={30} country="USA" />
      <UserCard name="Jane Smith" age={25} country="Canada" />
      <UserCard name="Bob Johnson" age={22} country="Australia" />
    </div>

    </>
  )
}

export default App
