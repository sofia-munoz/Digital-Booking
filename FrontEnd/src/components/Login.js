import{Link, Navigate, useNavigate } from 'react-router-dom'
import {useState} from 'react'


const Login = ({dataUsuario, handleUserLogged}) =>{

    const [correo, setCorreo] = useState('')
    const [contraseña, setContraseña] = useState('')
    const [errorForm,setErrorForm] = useState(false)
    const navigate = useNavigate();

    const handleSubmit = (event) =>{
        event.preventDefault()
        if(correo !== dataUsuario.email || contraseña !== dataUsuario.password) 
            {setErrorForm(true); 
            setContraseña(''); 
            setCorreo('')
        } else {setErrorForm(false)
                handleUserLogged()
                localStorage.setItem('userName', dataUsuario.name)
                localStorage.setItem('userLastName', dataUsuario.apellido)
                localStorage.setItem('userAvatar', dataUsuario.iniciales)
                navigate("/");
        }
    }

    const onChangeCorreo= (e) =>{
        setCorreo(e.target.value)
    }

    return(
        <div>
            <h1>Iniciar sesión</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor=''>Correo electrónico</label>
                <input type="email" onChange={onChangeCorreo} value={correo}/>

                <label htmlFor=''>Contraseña</label>
                <input type="password" onChange={(e) =>{setContraseña(e.target.value)}} value={contraseña}/>
                
                <br></br>
                {errorForm ? <span>Por favor vuelva a intentarlo, sus credenciales son inválidas</span> : <span/>}
                
                <button type="submit">Ingresar</button>
                <p>¿Aún no tenés cuenta? <Link to='/register'>Registrate</Link></p>
            </form>
        </div>
    )
}
export default Login
