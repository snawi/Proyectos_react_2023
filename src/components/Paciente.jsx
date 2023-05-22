
export const Paciente = ({ pacientel, setPacient, eliminarPaciente}) => {

  //mostrar la informacion en los span
  const {nombre, propietario, email, fecha, sintomas, id} =  pacientel

  const handleEliminar = ()=>{
    /* console.log('eliminando') */
    const respuesta = confirm('Deseas eliminar el registro?')

    if(respuesta){
      eliminarPaciente(id)
    }
  }




  return (
    <div className="border rounded-lg shadow-lg p-4 my-12 mx-4 bg-white">
        <p className=" uppercase font-bold p-2">Nombre: {''}
        <span className=" normal-case font-normal">{nombre}</span> </p>

        <p className=" uppercase font-bold p-2">Nombre propietario: {''}
        <span className=" normal-case font-normal">{propietario}</span> </p>

        <p className=" uppercase font-bold p-2">email: {''}
        <span className=" normal-case font-normal">{email}</span> </p>

        <p className=" uppercase font-bold p-2">alta: {''}
        <span className=" normal-case font-normal">{fecha}</span> </p>

        <p className=" uppercase font-bold p-2">Sintomas: {''}
        <span className=" normal-case font-normal">{sintomas}</span> </p>

        <div className="flex justify-between">
          <button 
          className=" bg-indigo-900 text-white py-1 px-8 rounded hover:bg-indigo-800 font-bold m-3 "
          type="button"
          onClick={()=>setPacient(pacientel)}>
              Editar
          </button>

          <button
            className="bg-red-800 text-white py-1 px-3 rounded hover:bg-red-700 font-bold m-3" 
            type="button"
            onClick={handleEliminar}>
              Eliminar
          </button>
        </div>
    </div>
  )
}
