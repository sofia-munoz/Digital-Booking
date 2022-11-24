import{Link, useNavigate} from 'react-router-dom'
import {useState} from 'react'
import styles from "./formularios.module.css"

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
    const [errorRegister, setErrorRegister] = useState(false)

const handleSubmit = (event) =>{
        event.preventDefault()
        nombre ===''? setErrorNombreVacio(true):setErrorNombreVacio(false)
        apellido ===''? setErrorApellidoVacio(true):setErrorApellidoVacio(false)
        correo ===''? setErrorCorreoVacio(true):setErrorCorreoVacio(false)
        contraseña ===''? setErrorContraseñaVacio(true):setErrorContraseñaVacio(false)
        contraseñaC ===''? setErrorConfVacio(true):setErrorConfVacio(false)

        if(nombre!=='' & apellido!=='' & correo!=='' & contraseña!==''){
            if(contraseña.length+1 < 6){ 
                setErrorContraseña(true)
                setErrorConfDistinto(false)
            }else{if (contraseñaC === '') {
                setErrorConfVacio(true)
                setErrorConfDistinto(false)
                    }else {if (contraseña !== contraseñaC){
                    setErrorConfDistinto(true);
                    setErrorContraseña(false)
                    setErrorConfVacio(false)
                    setContraseñaC('')
                    setContraseña('')
                    var element = document.getElementById('password2');
                    element.classList.toggle('error');
                        }else { 
                            setErrorConfDistinto(false);
                            setErrorConfVacio(false)
                            setErrorContraseña(false)
                             
                           //conectado a la api 
                            const data = {
                                nombre: nombre,
                                apellido: apellido,
                                email: correo,
                                password: contraseña,
                                usuarioRol: {
                                    id: 2,
                                    nombre: "ROL_USER",
                                    descripcion: "string"
                                  }
                            }
                            console.log(data)
                            fetch('http://52.14.221.16:8080/usuarios', {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify(data)
                            })
                            .then(response => response.json())
                            .then(data => {
                                console.log('Success:', data);
                                setErrorRegister(false)
                                if(data){
                                    navigate('/login')
                                }else{
                                    console.log('Error:', data);
                                }
                            })
                            .catch((error) => {
                                console.error('Error:', error);
                                setErrorRegister(true)
                            });
                    }
                }
            }
    }
}

    const isEmail = (email) =>/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);

    const onChangeCorreo=(e) =>{
        setCorreo(e.target.value)
        if(!isEmail(correo)){
            setErrorCorreo(true)
            var element = document.getElementById('email');
            element.classList.toggle('error');
        } else {setErrorCorreo(false)}
    }

    const onChangeContraseña=(e) =>{
        setContraseña(e.target.value)
        if(contraseña.length+1 < 6) {
            setErrorContraseña(true);
            var element = document.getElementById('password1');
            element.classList.toggle('error');
        } else setErrorContraseña(false)
    }

    const onChangeConfirmacion=(e) =>{
        setContraseñaC(e.target.value)
    }

    return(
        <div className={styles.body_form}>
            <div className={styles.form_container}>
                <h1>Crear cuenta</h1>
                    <form onSubmit={handleSubmit}>
                        <div className={styles.form_component_name_lastname}>
                            <div className={styles.form_component} id="name">
                            <label htmlFor=''>Nombre</label>
                            <input type="text" onChange={(e) =>{setNombre(e.target.value)}} value={nombre}/>
                            {errorNombreVacio ? <span>Este campo es obligatorio</span> : <span/>}
                            </div>
                            <div className={styles.form_component} id="lastname">
                            <label htmlFor=''>Apellido</label>
                            <input type="text" onChange={(e) =>{setApellido(e.target.value)}} value={apellido}/>
                            {errorApellidoVacio ? <span>Este campo es obligatorio</span> : <span/>}
                            </div>
                        </div>

                        <div className={styles.form_component} id="email">
                        <label htmlFor=''>Correo electrónico</label>
                        <input type="email" onChange={onChangeCorreo} value={correo}/>
                        {errorCorreo ? <span>El correo no es válido</span> : <span/>}
                        {errorCorreoVacio ? <span>Este campo es obligatorio</span> : <span/>}
                        </div>
                        
                        <div className={styles.form_component} id="password1">
                        <label htmlFor=''>Contraseña</label>
                        <input type="password" onChange={onChangeContraseña} value={contraseña}/>
                        {errorContraseña ? <span>La contraseña debe contener al menos 6 caracteres</span> : <span/>}
                        {errorContraseñaVacio ? <span>Este campo es obligatorio</span> : <span/>}
                        </div>

                        <div className={styles.form_component} id="password2">
                        <label htmlFor=''>Confirmar contraseña</label>
                        <input type="password"  onChange={onChangeConfirmacion} value={contraseñaC}/>
                        {errorConfVacio ? <span>Este campo es obligatorio</span> : <span/>}
                        {errorConfDistinto ? <span>Las contraseñas ingresadas no coinciden</span> : <span/>}
                        </div>

                        {errorRegister&&(
                            <div className={styles.warning_booking}>
                            <div className={styles.warning}>!</div>
                            <p>El usuario no ha podido registrarse. Por favor, intente más tarde</p>
                            </div>)}

                        <button type="submit">Crear cuenta</button>

                        <div className={styles.switch_path_component}>
                        <p>¿Ya tienes una cuenta? &nbsp;</p> <Link to='/login'><p className={styles.switch_path_link}>Iniciar sesión</p></Link>
                        </div>
                    </form>
            </div>
        </div>
    )
}
export default CrearCuenta