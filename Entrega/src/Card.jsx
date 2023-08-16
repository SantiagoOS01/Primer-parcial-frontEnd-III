function Card ({estudiantes}){
    return(
        <div>
            <h2>Hola, esta es la carta del estudiante</h2>
            {estudiantes.map((estudiante, index) => (
            <div key={index} className="card">
            <h3>{estudiante.nombre} {estudiante.apellido} {estudiante.edad} {estudiante.pais}</h3>
          </div>
          ))}:        
        </div>
    )
}

export default Card;