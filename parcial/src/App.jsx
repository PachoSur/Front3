import { useState } from 'react'
import './App.css'
import Card from './Card'

function App() {

  const [nombre, setNombre] = useState('')
  const [ciudad, setCiudad] = useState('')

  const [error, setError] = useState(false);
  const [show, setShow] = useState(false);


  const handleSubmit = (event) => {
    event.preventDefault()
   

    if(nombre.length >= 3 && nombre === nombre.trim() && ciudad.length >= 6) {
        setShow(true)
        setError(false)
    } else {
        setShow(false)
        setError(true)
    }
}


  return (
    <>
      <div className='App'>
        <form onSubmit={handleSubmit}>
          <h2>Ingresa tus datos:</h2>
          <label htmlFor='nombre'>Nombre:</label>
          <input name='nombre' onChange={(event) => setNombre(event.target.value)}/>
          <br></br>
          <label htmlFor='ciudad'>Ciudad:</label>
          <input name='ciudad' onChange={(event) => setCiudad(event.target.value)}/>
          <br></br><br></br>
          <button>Verificar</button>
        </form>
      </div>

      {error && <><h6 className='error'>Por favor chequea que la información sea correcta:</h6><h6>Sin espacios al inicio,3 o más caracteres el nombre y más de 5 la ciudad.</h6></>}
      {show ? <>

        <Card nombre={nombre} ciudad={ciudad}/>

        </>
        : null
      }


    </>
  )
}

export default App
