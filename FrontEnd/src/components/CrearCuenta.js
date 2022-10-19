import{Link} from 'react-router-dom'
import {useState} from 'react'

const CrearCuenta = () =>{

    const [nombre, setNombre] = useState('')
    const [apellido, setApellido] = useState('')
    const [correo, setCorreo] = useState('')
    const [contraseña, setContraseña] = useState('')
    const [contraseñaC, setContraseñaC] = useState('')
    const [error,setError] = useState(false)

    const handleSubmit = (event) =>{event.preventDefault()}
    const handleChange = () =>{}

    return(
        <div>
        <h1>Crear cuenta</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor=''>Nombre</label>
            <input type="text" onChange={handleChange} value={nombre}/>
            <label htmlFor=''>Apellido</label>
            <input type="text" onChange={handleChange} value={apellido}/>
            <label htmlFor=''>Correo electrónico</label>
            <input type="text" onChange={handleChange} value={correo}/>
            <label htmlFor=''>Contraseña</label>
            <input type="text" onChange={handleChange} value={contraseña}/>
            <label htmlFor=''>Confirmar contraseña</label>
            <input type="text" onChange={handleChange} value={contraseñaC}/>
            <button type="submit">Crear cuenta</button>
            <p>¿Ya tienes una cuenta? <Link to=''>Iniciar sesión</Link></p>
        </form>
        </div>
    )
}
export default CrearCuenta