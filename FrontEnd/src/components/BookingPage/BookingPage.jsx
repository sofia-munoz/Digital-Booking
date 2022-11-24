import React, {useState, useContext} from "react";
import BloqueHeader from "../ProductsPage/ProductComponents/BloqueHeader/BloqueHeader";
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
const goBack = '/products/'+product.id
const [showModalFailedBooking, setShowModalFailedBooking] = useState(false)
const [showModalBooking, setShowModalBooking] = useState(false)
const [timeArrival, setTimeArrival] = useState(null)
const [calendarAlert, setCalendarAlert] =useState(false)
const [timeAlert, setTimeAlert] =useState(false)
const userInfo = useContext(userInfoContext)

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
                start : checkin+"T00:00:00.000",
                end : checkout+"T00:00:00.000",
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


        } 

    }

    return(
        <>
            <BloqueHeader product={product} goBack={goBack}/>
            <div className={styles.main_container}> 
                <div className={styles.container}>   
                    <div className={styles.first_column}>
                        <UserForm/>
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
