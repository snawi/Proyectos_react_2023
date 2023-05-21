import { Paciente } from "./Paciente"


export const Pacientes = () => {
  return (
    <div className="w-2/3">
      <h1 className=" uppercase font-bold text-center">paciente registrado por la
       <span className=" text-indigo-700"> clinica</span> </h1>
      <Paciente/>
    </div>
  )
}
