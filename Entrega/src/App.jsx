import { useState } from 'react'
import './App.css'
import Card from './Card'
import Form from './Form';

function App() { 

  const [pacientes, setPacientes] = useState([])

  const addPacientes=(paciente)=>{
    setPacientes([...pacientes,paciente])
  }
  
  const [estudiantes, setEstudiantes]=useState([])

  const addEstudiantes=(estudiante)=>{
    setEstudiantes([...estudiantes,estudiante])
  }
  
  return (
    <div className='App'>
      <Form onAddEstudiante={addEstudiantes}/>
      <Card estudiantes={estudiantes}/>      
    </div>
  )
}

export default App
