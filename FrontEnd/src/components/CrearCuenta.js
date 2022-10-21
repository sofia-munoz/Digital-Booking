import{Link} from 'react-router-dom'
import {useState} from 'react'

const CrearCuenta = () =>{

    const [nombre, setNombre] = useState('')
    const [apellido, setApellido] = useState('')
    const [correo, setCorreo] = useState('')
    const [contraseña, setContraseña] = useState('')
    const [contraseñaC, setContraseñaC] = useState('')
    const [errorConfVacio,setErrorConfVacio] = useState(false)
    const [errorConfDistinto,setErrorConfDistinto] = useState(false)
    const [errorContraseña,setErrorContraseña] = useState(false)

    console.log(contraseña)
    console.log(contraseñaC)

    const handleSubmit = (event) =>{
        event.preventDefault()
        if (contraseñaC === '') {
            setErrorConfVacio(true)
            setErrorConfDistinto(false)
            }else {if (contraseña !== contraseñaC){
                    setErrorConfDistinto(true);
                    setErrorConfVacio(false)
                    setContraseñaC('')
                    setContraseña('')
                        }else { setErrorConfDistinto(false);
                                setErrorConfVacio(false)
                        };
        
            }
    }

    const onChangeContraseña=(e) =>{
        setContraseña(e.target.value)
        if(contraseña.length+1 < 6) {setErrorContraseña(true)} else setErrorContraseña(false)
        console.log(errorContraseña)
    }

    const onChangeConfirmacion=(e) =>{
        setContraseñaC(e.target.value)
        if(contraseñaC !== contraseña) {setErrorConfDistinto(false)} else setErrorConfDistinto(true)
        console.log(errorConfDistinto)
    }
    
    return(
        <div>
        <h1>Crear cuenta</h1>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor=''>Nombre</label>
                <input type="text" onChange={(e) =>{setNombre(e.target.value)}} value={nombre}/>
                <label htmlFor=''>Apellido</label>
                <input type="text" onChange={(e) =>{setApellido(e.target.value)}} value={apellido}/>
            </div>
            <label htmlFor=''>Correo electrónico</label>
            <input type="email" onChange={(e) =>{setCorreo(e.target.value)}} value={correo}/>
            
            <label htmlFor=''>Contraseña</label>
            <input type="password" onChange={onChangeContraseña} value={contraseña}/>
            {errorContraseña ? <span>La contraseña debe contener al menos 6 caracteres</span> : <span/>}
            
            <label htmlFor=''>Confirmar contraseña</label>
            <input type="password" onChange={onChangeConfirmacion} value={contraseñaC}/>
            {errorConfVacio ? <span>Este campo es obligatorio</span> : <span/>}
            {errorConfDistinto ? <span>La contraseñas ingresadas no coinciden</span> : <span/>}

            <button type="submit">Crear cuenta</button>
            <p>¿Ya tienes una cuenta? <Link to=''>Iniciar sesión</Link></p>
        </form>
        </div>
    )
}
export default CrearCuenta