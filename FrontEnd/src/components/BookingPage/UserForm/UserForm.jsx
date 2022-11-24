import React, { useContext } from "react";
import styles from './userForm.module.css'
import { userInfoContext } from "../../../App";

const UserForm = () => {
  const userInfo = useContext(userInfoContext)
  
  return (
    <div className={styles.user_data}>
        <h3> Confirmá tus datos</h3>
        <div className={styles.body_form}>
          <div className={styles.form_container}>     
            <form>
              <div className={styles.form_component}>
                <div className={styles.form_component_i} id="name">
                  <label htmlFor=''>Nombre</label>
                  <input className= {styles.input }type="text" name="name" id="name" placeholder={userInfo.name} readOnly/>
                </div>
                <div className={styles.form_component_i} id="lastname">
                  <label htmlFor=''>Apellido</label>
                  <input className= {styles.input } type="text" name="lastname" id="lastname" placeholder={userInfo.lastName} readOnly />
                </div>
              </div>
              <div className={styles.form_component}>
                <div className={styles.form_component_i} >
                  <label htmlFor=''>Correo electrónico</label>
                  <input className= {styles.input } type="email" name="email" id="email" placeholder={userInfo.email} readOnly />
                </div>
                <div className={styles.form_component_i}>
                  <label htmlFor="">Ciudad</label>
                  <input className= {styles.input } type="text" name="city" id="city" placeholder="Ciudad" />
                </div>
            </div>
        </form>
        </div>
        </div>

    </div>
)}

export default UserForm
