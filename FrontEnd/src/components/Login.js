import{Link, useNavigate } from 'react-router-dom'
import {useState} from 'react'
import "../styles/formularios.css"

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
        <div className='body-form'>
        <div className='form-container'>
            <h1>Iniciar sesión</h1>
            <form onSubmit={handleSubmit}>
                <div className='form-component'>
                <label htmlFor=''>Correo electrónico</label>
                <input type="email" onChange={onChangeCorreo} value={correo}/>
                </div>
                <div className='form-component'>
                <label htmlFor=''>Contraseña</label>
                <input type="password" onChange={(e) =>{setContraseña(e.target.value)}} value={contraseña}/>
                </div>

                {errorForm ? <span>Por favor vuelva a intentarlo, sus credenciales son inválidas</span> : <span/>}
                
                <button type="submit">Ingresar</button>

                <div className='swith-path-component'>
                <p>¿Aún no tenés cuenta?&nbsp;</p><Link to='/register'><p className='swith-path-link'> Registrate</p></Link>
                </div>

            </form>
        </div>
        </div>
    )
}
export default Login
