
import { Header } from './components/Header'
import { Pacientes } from './components/Pacientes'
import { Formulario } from './components/Formulario'
import { useState } from 'react'
import './index.css'

function App() {

  const[pacientes, setPacientes]=useState([])
  //state de boton
  const[pacient, setPacient] =useState({})
  
  return (
    <div className='container mx-auto'>
      <Header/>
      <div className='flex justify-between'>
        <Formulario
        pacient={pacient}
        pacientes={pacientes}
        setPacientes={setPacientes}
        />
        <Pacientes
        pacientes={pacientes}
        setPacient={setPacient}/>
      </div>
    </div>
  )
}

export default App
