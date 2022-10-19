import{Link} from 'react-router-dom'
import {useState} from 'react'

const Login = () =>{

    const [correo, setCorreo] = useState('')
    const [contraseña, setContraseña] = useState('')
    const [error,setError] = useState(false)

    const handleSubmit = (event) =>{event.preventDefault()}
    const handleChange = () =>{}

    return(
        <div>
        <h1>Iniciar sesión</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor=''>Correo electrónico</label>
            <input type="text" onChange={handleChange} value={correo}/>
            <label htmlFor=''>Contraseña</label>
            <input type="text" onChange={handleChange} value={contraseña}/>
            <button type="submit">Ingresar</button>
            <p>¿Aún no tenés cuenta? <Link to=''>Registrate</Link></p>
        </form>
        </div>
    )
}
export default Login