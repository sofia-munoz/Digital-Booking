import{Link, useNavigate} from 'react-router-dom'
import {useState, useEffect, useContext} from 'react'
import styles from "./formularios.module.css"
import Selector from '../MyProducts/MyNewProductComponents/Selector';
import userRoleList from '../../mocks/api/usuario.json'
import { userInfoContext } from '../../App'
import ModalMessage from '../ModalMessage/ModalMessage';

const CrearCuenta = () =>{

    const navigate = useNavigate()
    const userInfo = useContext(userInfoContext)
    
    useEffect(()=>{
        if(userInfo.name){
            navigate('/')
        }
    }, [userInfo.name])

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
    const [userRoleSelected, setUserRoleSelected] = useState(-1)
    const [errorUserRoleVacio, setErrorUserRoleVacio] = useState(false)
    const [succed, setSucced] = useState(false)

    const succedMessage = {
    path:"/Login",
    succed:true,
    title:"¡Muchas Gracias!",
    body: "El usuario ha sido creado con éxito",
    text: ""
    }

    const failedMessage = {
    path:"",
    succed:false,
    title:"¡Lo sentimos!",
    body: "El usuario NO ha sido creado con éxito",
    text: "Verifique sus datos y vuelva a intentarlo"
    }


const handleSubmit = (event) =>{
        event.preventDefault()
        nombre ===''? setErrorNombreVacio(true):setErrorNombreVacio(false)
        apellido ===''? setErrorApellidoVacio(true):setErrorApellidoVacio(false)
        correo ===''? setErrorCorreoVacio(true):setErrorCorreoVacio(false)
        contraseña ===''? setErrorContraseñaVacio(true):setErrorContraseñaVacio(false)
        contraseñaC ===''? setErrorConfVacio(true):setErrorConfVacio(false)
        userRoleSelected ===-1 ? setErrorUserRoleVacio(true):setErrorUserRoleVacio(false)

        if(nombre!=='' & apellido!=='' & correo!=='' & contraseña!=='' & userRoleSelected!==-1){
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
                            setErrorUserRoleVacio(false)
                            const userRole = userRoleList.filter(role=>role.id===userRoleSelected)
                            
                            const data = {
                                nombre: nombre,
                                apellido: apellido,
                                email: correo,
                                password: contraseña,
                                usuarioRol: {
                                    id: userRoleSelected,
                                    nombre: userRole.nombre,
                                    descripcion: userRole.descripcion
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
                                setSucced(true)
                            })
                            .catch((error) => {
                                console.error('Error:', error);
                                setErrorRegister(true)
                                setSucced(false)
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

    const HandleUserRoleSelected = (id)=> {
        setUserRoleSelected(id)
        setErrorUserRoleVacio(false)
        console.log("USER ROLE ID", id)
    }


    return(
        <div className={styles.body_form}>     
                    <form className={styles.form_container} onSubmit={handleSubmit}>

                        <h1>Crear cuenta</h1>
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

                        <div className={styles.form_component} id="role">
                        <label htmlFor=''>Elegí qué clase de usuario querés ser</label>
                        <Selector infoList={userRoleList.map((element) => {return {id : element.id, value : element.descripcion}})} handleSelected={HandleUserRoleSelected}/>
                        {errorUserRoleVacio ? <span>Este campo es obligatorio</span> : <span/>}
                        </div>
                        {userRoleSelected===1&&(<div  className={styles.warning_user}>Te recordamos que los usuarios administradores no pueden realizar reservas</div>)}
                        {userRoleSelected===2&&(<div  className={styles.warning_user}>Te recordamos que los usuarios inquilinos no pueden administrar propiedades</div>)}
                        
                        
                        {errorRegister&&(<ModalMessage handleShowMessage={setErrorRegister} modalInfo={failedMessage}/>)}
                        {succed&&(<ModalMessage handleShowMessage={setSucced} modalInfo={succedMessage}/>)}                            

                        <button type="submit">Crear cuenta</button>

                        <div className={styles.switch_path_component}>
                        <p>¿Ya tienes una cuenta? &nbsp;</p> <Link to='/login'><p className={styles.switch_path_link}>Iniciar sesión</p></Link>
                        </div>
                    </form>
            
        </div>
    )
}
export default CrearCuenta