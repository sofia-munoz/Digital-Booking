import{Link} from 'react-router-dom'
import {useState} from 'react'

const Login = () =>{

    const [correo, setCorreo] = useState('')
    const [contraseña, setContraseña] = useState('')
    const [errorEmail,setErrorEmail] = useState(false)
    const [errorForm,setErrorForm] = useState(false)

    const usuario ={'Email': correo, 'Password': contraseña}
    const usuarioPrueba ={'Email': "name@DH.com", 'Password': "123456"}
    
    const handleSubmit = (event) =>{
        event.preventDefault()
        if(usuario.Email !== usuarioPrueba.Email || usuario.Password !== usuarioPrueba.Password) 
            {setErrorForm(true); 
            setContraseña(''); 
            setCorreo('')
        } else {setErrorForm(false)}
        // if(usuario.Email) {setErrorEmail(false)
        //             setErrorForm(false) 
        //             if(usuario.Password.length < 6) {
        //             setErrorContraseña(true)
        //             setErrorForm(true)
        //             setContraseña('')
        //             }else{setErrorContraseña(false)
        //                   setErrorForm(false)}
        // }else{setErrorEmail(true)
        //       setErrorForm(true)
        //       setErrorContraseña(false)
        //       setContraseña('')
        //     }
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
                {/* texto opcional */}
                {errorEmail ? <span>Correo inválido</span> : <span/>}

                <label htmlFor=''>Contraseña</label>
                <input type="password" onChange={(e) =>{setContraseña(e.target.value)}} value={contraseña}/>
                
                <br></br>
                {/* texto obligatorio */}
                {errorForm ? <span>Por favor vuelva a intentarlo, sus credenciales son inválidas</span> : <span/>}
                
                <button type="submit">Ingresar</button>
                <p>¿Aún no tenés cuenta? <Link to=''>Registrate</Link></p>
            </form>
        </div>
    )
}
export default Login