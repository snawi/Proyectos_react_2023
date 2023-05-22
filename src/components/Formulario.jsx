import { useState, useEffect } from "react"


export const Formulario = ({pacientes, setPacientes, pacient, setPacient}) => {

    const [nombre, setNombre] = useState('')
    const [propietario, setPropietario] = useState('')
    const [email, setEmail] = useState('')
    const [fecha, setFecha] = useState('')
    const [sintomas, setSintomas] = useState('')

    const[error, setError] = useState(false)

    useEffect(()=>{
        if( Object.keys(pacient).length>0){
            setNombre(pacient.nombre)
            setPropietario(pacient.propietario)
            setEmail(pacient.email)
            setFecha(pacient.fecha)
            setSintomas(pacient.sintomas)
        }
    },[pacient])



    const generarId = ()=>{
        const random = Math.random().toString(36).substr(2)
        const fecha = Date.now().toString(36)
        return random + fecha
    }


    const handle = (e)=>{
        e.preventDefault()
        /* console.log('enviando') */

        //validacion formulario

        if([nombre, propietario, email, fecha, sintomas].includes('')){
            /* console.log('hay unos vacios') */

            setError(true)
            return
        }

            setError(false)

            //objeto de pacientes para mandarselo al state del componente app

            const objetoPaciente={
                nombre,
                propietario,
                email,
                fecha,
                sintomas
                
            }

            if(pacient.id){
                //editando registro
                objetoPaciente.id = pacient.id
                const pacientesActualizados=pacientes.map(pacienteState => pacienteState.id ==
                pacient.id ? objetoPaciente : pacienteState)

                setPacientes(pacientesActualizados)
                setPacient({})

            }else{
                //nuevo registro 
                objetoPaciente.id=generarId()
                setPacientes([...pacientes, objetoPaciente])
            }

            

            //reiniciar el formulario para que quede vacio

            setNombre('')
            setPropietario('')
            setEmail('')
            setFecha('')
            setSintomas('')
    }
    
    





  return (
    <div className="w-1/2">
       <p className=" uppercase font-bold text-center font-mono">Formulario para registrar los pacientes de las {''}
       <span className=" text-indigo-700">clinicas y alrededores</span></p> 

        <form 
        onSubmit={handle}
        className="border p-4 rounded-lg shadow-lg my-6 bg-white">

                {error && 
                <div className=" bg-red-700 rounded p-2 m-4">
                    <p className=" text-white font-bold text-center">Todos los campos son obligatorios</p>
                    </div>}


            <div >
                <label className=" uppercase font-bold" htmlFor="">Nombre mascota</label>
                <input 
                className="block p-2 w-full rounded-md border mt-2 focus:outline-none focus:border-blue-700
                mb-3"
                type="text"
                placeholder="Nombre mascota"
                value={nombre}
                onChange={(e)=>setNombre(e.target.value)} />
            </div>

            <div >
                <label className=" uppercase font-bold" htmlFor="">Nombre propietario</label>
                <input 
                className="block p-2 w-full rounded-md border mt-2 focus:outline-none focus:border-blue-700
                mb-3"
                type="text"
                placeholder="Nombre propietario" 
                value={propietario}
                onChange={(e)=>setPropietario(e.target.value)}/>
            </div>

            <div >
                <label className=" uppercase font-bold" htmlFor="">Email</label>
                <input 
                className="block p-2 w-full rounded-md border mt-2 focus:outline-none focus:border-blue-700
                mb-3"
                type="email"
                placeholder="email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)} />
            </div>

            <div >
                <label className=" uppercase font-bold" htmlFor="">alta</label>
                <input 
                className="block p-2 w-full rounded-md border mt-2 focus:outline-none focus:border-blue-700
                mb-3"
                type="date"
                placeholder=""
                value={fecha}
                onChange={(e)=>setFecha(e.target.value)} />
            </div>

            <div >
                <label className=" uppercase font-bold" htmlFor="">sintomas</label>
                <textarea className="block p-2 w-full rounded-md border mt-2 focus:outline-none focus:border-blue-700
                mb-3"
                value={sintomas}
                onChange={(e)=>setSintomas(e.target.value)}></textarea>
            </div>

            <div className="">
                <input type="submit" 
                className=" bg-indigo-800 py-2 px-3 hover:bg-indigo-700 rounded-md border text-white uppercase
                font-bold text-xs w-full cursor-pointer "
                value={pacient.id ? 'Editar paciente' : 'Agregar paciente'}/>
            </div>
        </form>


    </div>
  )
}
