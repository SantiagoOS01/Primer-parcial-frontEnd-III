import { useState } from "react";

function Form ({onAddEstudiante}){

    const [nombre,setNombre]=useState("")
    const [apellido,setApellido]=useState("")
    const [edad,setEdad]=useState("")
    const [pais,setPais]=useState("")

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(nombre&&apellido&&edad&&pais){
            agregarEstudiante({nombre,apellido,edad,pais})
            setNombre("");
            setApellido("");
            setEdad("");
            setPais("");
        }
    }
    return(
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder='Ej: Juan' value={nombre} onChange={handlerNombre}/>
          <input type="text" placeholder='Ej: Perez' value={apellido} onChange={handlerApellido} />
          <input type="text" placeholder='Ej: 20' value={edad} onChange={handlerEdad}/>
          <input type="text" placeholder='Ej: Colombia'value={pais} onChange={handlerPais}/>
          <button type="submit">Enviar Estudiante</button>
        </form>
    )
}
export default Form;

