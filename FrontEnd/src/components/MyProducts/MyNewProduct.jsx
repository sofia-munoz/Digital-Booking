import React from 'react'
import { useState, useEffect, useContext } from 'react'
import styles from './MyProducts.module.css'
import Selector from './MyNewProductComponents/Selector'
import CheckboxList from './MyNewProductComponents/CheckboxList'
import ItemListAdd from './MyNewProductComponents/ItemListAdd/ItemListAdd'
import { userInfoContext } from "../../App";
import ModalMessage from '../ModalMessage/ModalMessage'
import { useNavigate } from 'react-router-dom'

export default function MyNewProduct () {

    const userInfo = useContext(userInfoContext)
    const navigate = useNavigate()
    const [title, setTitle] = useState('')
    const [address, setAddress] = useState('')
    const [categoryList, setCategoryList] = useState([])
    const [categorySelected, setCategorySelected] = useState()
    const [cityList, setCityList] = useState([])
    const [citySelected, setCitySelected] = useState()
    const [amenityList, setAmenityList] = useState([])
    const [selectedAmenities, setSelectedAmenities] = useState([])
    const [titleDescription, setTitleDescription] = useState('')
    const [description, setDescription] = useState('')
    const [rules, setRules] = useState(
        "-Check-out: 10:00. -No se permiten fiestas. -No se permite fumar"
    )
    const [security, setSecurity] = useState(
        "-Se aplican las pautas de distanciamiento social y otras normas relacionadas con el coronavirus. -Contamos con detector de monóxido de carbono. -Contamos con caja fuerte."
    )
    const [cancelation, setCancelation] = useState(
        "-Posibilidad de cancelar hasta 24hs antes de la reserva."
    )
    
    const [imageList, setImageList] = useState([])

    
    const [showProductCreated, setShowProductCreated] = useState(false)
    const [showProductFailed, setShowProductFailed] = useState(false)
    
    const succedMessage = {
        path:"/",
        icon:"../../assets/succed.png",
        title:"¡Felicidades!",
        body: "Su producto se ha creado con éxito",
        text: ""
        }
    const failedMessage = {
        path:"",
        icon:"../../assets/error.png",
        title:"¡Lo sentimos!",
        body: "Su producto NO se ha creado con éxito",
        text: "Por favor, intente más tarde"
        }

    const urlCiudades = 'http://52.14.221.16:8080/ciudades'
    const urlCategorias = 'http://52.14.221.16:8080/categorias'
    const urlAmenity = 'http://52.14.221.16:8080/caracteristicas'

    const settings ={
                   method: 'GET',
                   headers: {
                          'Content-Type': 'application/json'
                   } 
                  }

    useEffect(() => { 
            Promise.resolve().then(async function(){
              try{
                  const response = await fetch (urlCiudades, settings)
                  const data = await response.json()
                  setCityList(data) 
              } catch (error){
                  console.error(error)
              }
            })
            }, [urlCiudades])

    useEffect(() => {
            Promise.resolve().then(async function(){
              try{
                  const response = await fetch (urlCategorias, settings)
                  const data = await response.json()
                  setCategoryList(data) 
              } catch (error){
                  console.error(error)
              }
            })
              }, [urlCategorias])

    useEffect(() => {
        Promise.resolve().then(async function(){
            try{
                const response = await fetch (urlAmenity, settings)
                const data = await response.json()
                setAmenityList(data) 
            } catch (error){
                console.error(error)
            }
        })
            }, [urlAmenity])

    const HandleSelectCategory = (id) =>{
        setCategorySelected(id)
    }

    const HandleSelectCity = (id) =>{
        setCitySelected(id)
    }

    const HandleSubmit = (event)=>{
        event.preventDefault()
        
        //validaciones

        const data = {
                titulo: title,
                tituloDescripcion: titleDescription,
                descripcion: description,
                disponibilidad: null,
                ubicacion: address,
                idCaracteristicas: selectedAmenities,
                politica: {
                    normas: rules,
                    seguridad: security,
                    cancelacion: cancelation
                },
                idCiudad: citySelected,
                idProvincia: null,
                idCategoria: categorySelected,
                imagenesURL: imageList,
                precio: 4000,
                idUsuario: userInfo.id
                }

            console.log('PRODUCTO POST: ',data)  

            fetch('http://52.14.221.16:8080/productos/administracion', {
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${userInfo.tokenJWT}`,
                        'Content-Type': 'application/json'
                        },
                    body: JSON.stringify(data)
                            })
            .then(response => {
                    if (response.status!=200){
                        throw new Error(response.error)
                    } 
                        return response.json()
                    })
            .then(data => {
                    console.log(data)
                    setShowProductCreated(true)
                    navigate(window.scrollTo(0, 0))
                    })
            .catch((error) => {
                    console.error('Error:', error);
                    setShowProductFailed(true)
                    navigate(window.scrollTo(0, 0))
                    });
    }

  return (
    <>
        <div className={styles.main_container}>
            <h2>Crear propiedad</h2>
            <div className={styles.form_container}>
                <form onSubmit={HandleSubmit}>
                    <div className={styles.title}>
                        <div className={styles.form_component}>
                            <label htmlFor=''>Nombre de la propiedad</label>
                            <input type="text" onChange={(e) =>{setTitle(e.target.value)}} value={title} placeholder="ej: Departamento en Palermo"/>
                        </div>
                        <div className={styles.form_component}>
                            <label htmlFor=''>Categoría</label>
                            <Selector handleSelected={HandleSelectCategory} infoList={categoryList.map((element) => {return {id : element.id, value : element.titulo}})} />
                        </div>
                    </div>
                    <div className={styles.location}>
                         <div className={styles.form_component}>
                            <label htmlFor=''>Dirección</label>
                            <input type="text" onChange={(e) =>{setAddress(e.target.value)}} value={address} placeholder="Indicá la dirección exacta de tu propiedad"/>
                        </div>                        
                        <div className={styles.form_component}>
                            <label htmlFor=''>Ciudad</label>
                            <Selector handleSelected={HandleSelectCity} infoList={cityList.map((element) => {return {id : element.id, value : element.ciudad}})} />
                        </div>
                    </div>
                    <div className={styles.form_component}>
                        <label htmlFor=''>Titulo de la descripción</label>
                        <input type="text" onChange={(e) =>{setTitleDescription(e.target.value)}} value={titleDescription} placeholder="ej: Alojate en la mejor zona de Palermo"/>
                    </div>
                    <div className={styles.form_component}>
                        <label htmlFor=''>Descripción</label>
                        <textarea rows={4} onChange={(e) =>{setDescription(e.target.value)}} value={description}  placeholder="Descripción atractiva de la propiedad"/>
                    </div>
                    <div className={styles.amenity_options}>
                    <h3>Atributos</h3>
                    <span>Elegí los atributos que contenga tu propiedad. Recordá que podés elegir más de uno.</span>
                        <CheckboxList itemList={amenityList} selectedItems ={selectedAmenities} handleSelectedItems ={setSelectedAmenities}/>
                    </div>
                    <h3>Politicas del producto</h3>
                    <span>Te brindamos una serie de políticas como guía para que las edites y queden acorde a las de tu propiedad</span>
                    <div className={styles.policy_and_rules}>
                        <div className={styles.policy_container}>
                            <h6>Normas de la casa</h6>
                            <label htmlFor=''>Descripción</label>
                            <textarea rows={10} onChange={(e) =>{setRules(e.target.value)}} value={rules}/>
                        </div>   
                        <div className={styles.policy_container}>
                            <h6>Salud y seguridad</h6>
                            <label htmlFor=''>Descripción</label>
                            <textarea rows={10} onChange={(e) =>{setSecurity(e.target.value)}} value={security}/>    
                        </div> 
                        <div className={styles.policy_container}>
                            <h6>Políticas de cancelación</h6>
                            <label htmlFor=''>Descripción</label>
                            <textarea rows={10} onChange={(e) =>{setCancelation(e.target.value)}} value={cancelation}/>
                        </div>                      
                    </div>
                    <div className={styles.images}>
                    <h3>Cargar imágenes</h3>
                    <span>Te recomendamos cargar imágenes horizontales para que sean mejor apreciadas. Recordá que la primer imágen cargada será la imagen de portada. Cargá mínimo 5 imágenes</span>
                    <ItemListAdd itemList={imageList} handleItemList={setImageList} inputPlaceHolder={"URL de la imagen"}/>                      
                    </div>    
                </form>
                <div className={styles.submit_buttons}>
                        <button onClick={HandleSubmit}>Crear producto</button>
                </div>
                {showProductCreated&&(<ModalMessage handleShowMessage={setShowProductCreated} modalInfo={succedMessage}/>)}
                {showProductFailed&&(<ModalMessage handleShowMessage={setShowProductFailed} modalInfo={failedMessage}/>)}
            </div>
        </div>
    </>
  )
}
