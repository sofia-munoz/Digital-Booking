import React, {useState, useContext} from "react";
import styles from "./BookingPage.module.css"
import UserForm from "./UserForm/UserForm";
import BookingDateSelector from "./Calendar/BookingDateSelector";
import BookingTimeSelector from "./TimeSelector/BookingTimeSelector";
import BookingDetail from "./BookingDetail/BookingDetail";
import PolicyAndRules from "../ProductsPage/ProductComponents/Policy/PolicyAndRules";
import BookingSucced from "./BookingSucced/BookingSucced";
import BookingFailed from './BookingFailed/BookingFailed';
import { userInfoContext } from "../../App";


export default function ProductPage ({handleCheckIn, handleCheckOut, checkin, checkout, product}) {
const [showModalFailedBooking, setShowModalFailedBooking] = useState(false)
const [showModalBooking, setShowModalBooking] = useState(false)
const [timeArrival, setTimeArrival] = useState(null)
const [calendarAlert, setCalendarAlert] =useState(false)
const [timeAlert, setTimeAlert] =useState(false)
const userInfo = useContext(userInfoContext)
const [userCity, setUserCity] = useState('')

const usuarioCiudad = {          
    id: userInfo.id,
    nombre: userInfo.name,
    apellido: userInfo.lastName,
    email: userInfo.email,
    password: userInfo.password,
    ciudad: userCity,
    usuarioRol: {
        id: 2,
        nombre: "ROL_USER",
        descripcion: "string"
  }
}



const handleAcceptFailed = () => {
    setShowModalFailedBooking(false)
}

const handleBooking = ()=>{
    setCalendarAlert(false)
    setTimeAlert(false)
    let calendarOk = true;
    let timeOk = true;

    if (checkin==='-/-/-') {
        setCalendarAlert(true)
        calendarOk = false;
    } 
        
        if (!timeArrival) { 
        setTimeAlert(true)
        timeOk = false;
        }
        
        if(calendarOk && timeOk)
        {
            const data = {
                start : checkin,
                end : checkout,
                idProducto : product.id,
                idUsuario : userInfo.id,

            }
            console.log("reserva", data)
                fetch('http://52.14.221.16:8080/reservas', {
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
                            setShowModalBooking(true)
                            localStorage.removeItem("idProducto")
                            })
                        .catch((error) => {
                                console.error('Error:', error);
                                setShowModalFailedBooking(true)
                            });
                
                fetch('http://52.14.221.16:8080/usuarios/', {
                    method: 'PUT',
                    headers: {
                        'Authorization': `Bearer ${userInfo.tokenJWT}`,
                        'Content-Type': 'application/json'
                        },
                    body: JSON.stringify(usuarioCiudad)
                    })
                        .then(response => {
                            if (response.status!=200){
                                throw new Error(response.error)
                            } 
                                return response.json()
                            })
                        .then(usuarioCiudad => {
                            console.log("se cambio con exito ciudad " + usuarioCiudad.ciudad)
                            
                            })
                        .catch((error) => {
                                console.error('Error:', error);
                                
                            });
        } 

    }

    return(
        <>
            <div className={styles.main_container}> 
                <div className={styles.container}>   
                    <div className={styles.first_column}>
                        <UserForm handleUserCity={setUserCity}/>
                        <BookingDateSelector handleCheckIn = {handleCheckIn} handleCheckOut = {handleCheckOut}/>
                        <BookingTimeSelector setTimeArrival={setTimeArrival}/>
                    </div>
                    <div className={styles.second_column}>
                        <BookingDetail timeAlert={timeAlert} calendarAlert={calendarAlert} handleBooking={handleBooking} checkin={checkin} checkout={checkout} product={product} />
                    </div>
                </div>
                <PolicyAndRules/>
                {showModalBooking&&(<BookingSucced handleBooking={handleBooking}/>)}
                {showModalFailedBooking&&(<BookingFailed handleAcceptFailed={handleAcceptFailed}/>)}
            </div>
        </>
    )
    }
