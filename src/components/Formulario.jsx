

export const Formulario = () => {
  return (
    <div className="w-1/2">
       <p className=" uppercase font-bold text-center">Formulario para registrar los pacientes de las {''}
       <span className=" text-indigo-700">clinicas y alrededores</span></p> 

        <form className="border p-4 rounded-lg shadow-lg my-7">
            <div >
                <label className=" uppercase font-bold" htmlFor="">Nombre mascota</label>
                <input 
                className="block p-2 w-full rounded-md border mt-2 focus:outline-none focus:border-blue-700
                mb-3"
                type="text"
                placeholder="Nombre mascota" />
            </div>

            <div >
                <label className=" uppercase font-bold" htmlFor="">Nombre propietario</label>
                <input 
                className="block p-2 w-full rounded-md border mt-2 focus:outline-none focus:border-blue-700
                mb-3"
                type="text"
                placeholder="Nombre propietario" />
            </div>

            <div >
                <label className=" uppercase font-bold" htmlFor="">Email</label>
                <input 
                className="block p-2 w-full rounded-md border mt-2 focus:outline-none focus:border-blue-700
                mb-3"
                type="email"
                placeholder="email" />
            </div>

            <div >
                <label className=" uppercase font-bold" htmlFor="">alta</label>
                <input 
                className="block p-2 w-full rounded-md border mt-2 focus:outline-none focus:border-blue-700
                mb-3"
                type="date"
                placeholder="" />
            </div>

            <div >
                <label className=" uppercase font-bold" htmlFor="">sintomas</label>
                <textarea className="block p-2 w-full rounded-md border mt-2 focus:outline-none focus:border-blue-700
                mb-3"></textarea>
            </div>

            <div className="">
                <input type="submit" 
                className=" bg-indigo-800 py-2 px-3 hover:bg-indigo-700 rounded-md border text-white uppercase
                font-bold text-xs w-full "
                value="Agregar paciente"/>
            </div>
        </form>


    </div>
  )
}
