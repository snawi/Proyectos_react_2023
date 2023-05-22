import { Paciente } from "./Paciente"


export const Pacientes = ({pacientes, setPacient, eliminarPaciente}) => {
  return (
    <div className="w-2/3">

      {pacientes && pacientes.length ? (

          <>
          <h1 className=" uppercase font-bold text-center font-mono">paciente registrado por la
          <span className=" text-indigo-700"> clinica</span> </h1>

          {pacientes.map(pacientel =>(
              <Paciente
              key={pacientel.id}
              pacientel={pacientel} 
              setPacient={setPacient}
              eliminarPaciente={eliminarPaciente}

              />
      
          ))}

         </>


      ): (
        <>
            <h1 className=" uppercase font-bold text-center">No hay pacientes empieza a colocarlos
            <span className=" text-indigo-700"> aqui</span> </h1>
        </>
      )}


     

    
    </div>
  )
}
