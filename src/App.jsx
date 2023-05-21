
import { Header } from './components/Header'
import { Pacientes } from './components/Pacientes'
import { Formulario } from './components/Formulario'
import './index.css'

function App() {
  
  return (
    <div className='container mx-auto'>
      <Header/>
      <div className='flex justify-between'>
        <Formulario/>
        <Pacientes/>
      </div>
    </div>
  )
}

export default App
