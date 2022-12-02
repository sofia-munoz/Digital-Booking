import React from 'react'
import { useState } from 'react'
import BloqueHeader from '../ProductsPage/ProductComponents/BloqueHeader/BloqueHeader'
import styles from './MyProducts.module.css'
import CategorySelector from './MyProductsComponents/CategorySelector'
import PlaceSelector from '../Body/BodyComponents/Buscador/BuscadorComponents/PlaceSelector'

export default function MyProducts () {
    const info = {
        titulo: "Administración de propiedades"
    }

    const [producto, setProducto] = useState()
    const [titulo, setTitulo] = useState()
    const [address, setAddress] = useState()
    const [category, setCategory] = useState()

  return (
    <>
        <BloqueHeader info={info}/>
        <div className={styles.main_container}>
            <h2>Crear propiedad</h2>
            <div className={styles.form_container}>
                <form>
                    <div className={styles.title}>
                        <div className={styles.form_component}>
                            <label htmlFor=''>Nombre de la propiedad</label>
                            <input type="text" onChange={(e) =>{setTitulo(e.target.value)}} value={titulo}/>
                        </div>
                        <CategorySelector handleCategory={setCategory}/>
                    </div>
                    <div className={styles.location}>
                         <div className={styles.form_component}>
                            <label htmlFor=''>Dirección</label>
                            <input type="text" onChange={(e) =>{setAddress(e.target.value)}} value={address}/>
                        </div>
                        <PlaceSelector/>
                    </div>
                    <div className={styles.description}>

                    </div>
                    <div className={styles.amenity_options}>

                    </div>
                    <h3>Agregar atributos</h3>
                    <div className={styles.new_amenity}>

                    </div>
                    <h3>Politicas del producto</h3>
                    <div className={styles.policy_and_rules}>
                        <div className={styles.rules}>
                            
                        </div>   
                        <div className={styles.security}>
                            
                        </div> 
                        <div className={styles.cancelation}>
                            
                        </div>                      
                    </div>
                    <div className={styles.images}>
                        
                    </div> 
                </form>
            </div>
        </div>
    </>
  )
}
