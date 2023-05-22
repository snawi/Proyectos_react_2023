
import { Header } from './components/Header'
import { Pacientes } from './components/Pacientes'
import { Formulario } from './components/Formulario'
import { Paciente } from './components/Paciente'
import { useState, useEffect } from 'react'
import './index.css'

function App() {

  const[pacientes, setPacientes]=useState([])
  //state de boton
  const[pacient, setPacient] =useState({})
  //local storage
  useEffect(()=>{
    const obtenerLS = ()=>{
    const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? []
    setPacientes(pacientesLS)
    } 
    obtenerLS()
},[])

  useEffect(()=>{
    localStorage.setItem('pacientes', JSON.stringify(pacientes))
  },[pacientes]) 



  
  





//funcion de eliminar para el boton eliminar
  const eliminarPaciente=(id)=>{
    /* console.log('eliminando', id) */
    const pacientesActualizados=pacientes.filter(pacient => pacient.id !==id)
    setPacientes(pacientesActualizados)
  }
  
  return (
    <div className='container mx-auto'>
      <Header/>
      <div className='flex justify-between'>
        <Formulario
        pacient={pacient}
        setPacient={setPacient}
        pacientes={pacientes}
        setPacientes={setPacientes}
        />
        <Pacientes
        pacientes={pacientes}
        setPacient={setPacient}
        eliminarPaciente={eliminarPaciente}/>
      </div>
    </div>
  )
}

export default App
