import{Link, useNavigate} from 'react-router-dom'
import {useState} from 'react'
import "../styles/formularios.css"

const CrearCuenta = () =>{
    
    const navigate = useNavigate();
    const [nombre, setNombre] = useState('')
    const [apellido, setApellido] = useState('')
    const [correo, setCorreo] = useState('')
    const [contraseña, setContraseña] = useState('')
    const [contraseñaC, setContraseñaC] = useState('')
    const [errorConfVacio,setErrorConfVacio] = useState(false)
    const [errorConfDistinto,setErrorConfDistinto] = useState(false)
    const [errorContraseña,setErrorContraseña] = useState(false)
    const [errorCorreo,setErrorCorreo] = useState(false)   
    const [errorNombreVacio,setErrorNombreVacio] = useState(false)
    const [errorApellidoVacio,setErrorApellidoVacio] = useState(false)
    const [errorCorreoVacio,setErrorCorreoVacio] = useState(false)
    const [errorContraseñaVacio,setErrorContraseñaVacio] = useState(false)

    const handleSubmit = (event) =>{
        event.preventDefault()
        nombre ===''? setErrorNombreVacio(true):setErrorNombreVacio(false)
        apellido ===''? setErrorApellidoVacio(true):setErrorApellidoVacio(false)
        correo ===''? setErrorCorreoVacio(true):setErrorCorreoVacio(false)
        contraseña ===''? setErrorContraseñaVacio(true):setErrorContraseñaVacio(false)
        contraseñaC ===''? setErrorConfVacio(true):setErrorConfVacio(false)
        if (contraseñaC === '') {
            setErrorConfVacio(true)
            setErrorConfDistinto(false)
            }else {if (contraseña !== contraseñaC){
                setErrorConfDistinto(true);
                setErrorConfVacio(false)
                setContraseñaC('')
                setContraseña('')
                    }else { 
                        setErrorConfDistinto(false);
                        setErrorConfVacio(false)
                        navigate("/login");
                            };
            }
    }

    const isEmail = (email) =>/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);

    const onChangeCorreo=(e) =>{setCorreo(e.target.value)
        if(!isEmail(correo)){setErrorCorreo(true)
        } else {setErrorCorreo(false)}
    }

    const onChangeContraseña=(e) =>{
        setContraseña(e.target.value)
        if(contraseña.length+1 < 6) {setErrorContraseña(true)} else setErrorContraseña(false)
        console.log(errorContraseña)
    }

    const onChangeConfirmacion=(e) =>{
        setContraseñaC(e.target.value)
    }
    
    return(
        <div className='body-form'>
        <div className='form-container'>
        <h1>Crear cuenta</h1>
        <form onSubmit={handleSubmit}>
            <div className='form-component-name-lastname'>
                <div className='form-component'>
                <label htmlFor=''>Nombre</label>
                <input type="text" onChange={(e) =>{setNombre(e.target.value)}} value={nombre}/>
                {errorNombreVacio ? <span>Este campo es obligatorio</span> : <span/>}
                </div>
                <div className='form-component'>
                <label htmlFor=''>Apellido</label>
                <input type="text" onChange={(e) =>{setApellido(e.target.value)}} value={apellido}/>
                {errorApellidoVacio ? <span>Este campo es obligatorio</span> : <span/>}
                </div>
            </div>

            <div className='form-component'>
            <label htmlFor=''>Correo electrónico</label>
            <input type="email" onChange={onChangeCorreo} value={correo}/>
            {errorCorreo ? <span>El correo no es válido</span> : <span/>}
            {errorCorreoVacio ? <span>Este campo es obligatorio</span> : <span/>}
            </div>
            
            <div className='form-component'>
            <label htmlFor=''>Contraseña</label>
            <input type="password" onChange={onChangeContraseña} value={contraseña}/>
            {errorContraseña ? <span>La contraseña debe contener al menos 6 caracteres</span> : <span/>}
            {errorContraseñaVacio ? <span>Este campo es obligatorio</span> : <span/>}
            </div>

            <div className='form-component'>
            <label htmlFor=''>Confirmar contraseña</label>
            <input type="password" onChange={onChangeConfirmacion} value={contraseñaC}/>
            {errorConfVacio ? <span>Este campo es obligatorio</span> : <span/>}
            {errorConfDistinto ? <span>Las contraseñas ingresadas no coinciden</span> : <span/>}
            </div>

            <button type="submit">Crear cuenta</button>

            <div className='swith-path-component'>
            <p>¿Ya tienes una cuenta? &nbsp;</p> <Link to='/login'><p className='swith-path-link'>Iniciar sesión</p></Link>
            </div>
        </form>
        </div>
        </div>
    )
}
export default CrearCuenta