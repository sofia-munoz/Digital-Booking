import{Link, useNavigate } from 'react-router-dom'
import {useState} from 'react'
import styles from "./formularios.module.css"
import usuario from "../../mocks/api/usuario.json"

const Login = ({handleUserLogged}) =>{

    const [correo, setCorreo] = useState('')
    const [contraseña, setContraseña] = useState('')
    const [errorForm,setErrorForm] = useState(false)
    const navigate = useNavigate();
    const producto=localStorage.getItem('idProducto')
    
    const handleSubmit = (event) =>{
        event.preventDefault()
        if(correo !== usuario[0].email || contraseña !== usuario[0].password) 
            {setErrorForm(true); 
            setContraseña(''); 
            setCorreo('')
        } else {setErrorForm(false)
                handleUserLogged()
                localStorage.setItem('userName', usuario[0].name)
                localStorage.setItem('userLastName', usuario[0].apellido)
                localStorage.setItem('userAvatar', usuario[0].iniciales)
                if (producto){
                navigate(`/products/${producto}/booking-detail`);    
                } else{
                navigate('/');     
                }
                
                console.log("Usuario logueado con exito")
        }
    }

    const onChangeCorreo= (e) =>{
        setCorreo(e.target.value)
    }

    return(
        <div className={styles.body_form}>
        <div className={styles.form_container}>
            <h1>Iniciar sesión</h1>
            <form onSubmit={handleSubmit}>
                <div className={styles.form_component}>
                <label htmlFor=''>Correo electrónico</label>
                <input type="email" onChange={onChangeCorreo} value={correo}/>
                </div>
                <div className={styles.form_component}>
                <label htmlFor=''>Contraseña</label>
                <input type="password" onChange={(e) =>{setContraseña(e.target.value)}} value={contraseña}/>
                </div>

                {errorForm ? <span className={styles.error_en_credenciales}>Por favor vuelva a intentarlo, sus credenciales son inválidas</span> : <span/>}
                
                <button type="submit">Ingresar</button>

                <div className={styles.switch_path_component}>
                <p>¿Aún no tenés cuenta?&nbsp;</p><Link to='/register'><p className={styles.switch_path_link}> Registrate</p></Link>
                </div>

            </form>
        </div>
        </div>
    )
}
export default Login
