import React from 'react'
import styles from './datos.module.css'

const Datos = () => {
  return (
    <div className={styles.body_form}>
        <div className={styles.form_container}>
       
        <form>
            <div className={styles.form_component}>
                <div className={styles.form_component_i} id="name">
                <label htmlFor=''>Nombre</label>
                <input className= {styles.input }type="text" name="name" id="name" placeholder="Nombre" />
                {/* <input type="text" onChange={(e) =>{setNombre(e.target.value)}} value={nombre}/> */}
                {/* {errorNombreVacio ? <span>Este campo es obligatorio</span> : <span/>} */}
                </div>
                <div className={styles.form_component_i} id="lastname">
                <label htmlFor=''>Apellido</label>
                <input className= {styles.input } type="text" name="lastname" id="lastname" placeholder="Apellido" />
                {/* <input type="text" onChange={(e) =>{setApellido(e.target.value)}} value={apellido}/> */}
                {/* {errorApellidoVacio ? <span>Este campo es obligatorio</span> : <span/>} */}
                </div>
            </div>
            <div className={styles.form_component}>
            <div className={styles.form_component_i} >
            <label htmlFor=''>Correo electrónico</label>
            <input className= {styles.input } type="email" name="email" id="email" placeholder="Correo electrónico" />
            {/* <input type="email" onChange={onChangeCorreo} value={correo}/> */}
            {/* {errorCorreo ? <span>El correo no es válido</span> : <span/>}
            {errorCorreoVacio ? <span>Este campo es obligatorio</span> : <span/>} */}
            
            </div>
            <div className={styles.form_component_i}>
            <label htmlFor="">Ciudad</label>
            <input className= {styles.input } type="text" name="city" id="city" placeholder="Ciudad" />
            </div>
            </div>


            
            

           
            
        </form>
        </div>
        </div>
  )
}

export default Datos