import React, {useState} from "react";
import BloqueHeader from "../ProductsPage/ProductComponents/BloqueHeader/BloqueHeader";
import styles from "./BookingPage.module.css"
import UserForm from "./UserForm/UserForm";
import BookingDateSelector from "./Calendar/BookingDateSelector";
import BookingTimeSelector from "./TimeSelector/BookingTimeSelector";
import BookingDetail from "./BookingDetail/BookingDetail";
import PolicyAndRules from "../ProductsPage/ProductComponents/Policy/PolicyAndRules";
import BookingSucced from "./BookingSucced/BookingSucced";

export default function ProductPage ({handleCheckIn, handleCheckOut, checkin, checkout, product}) {
const goBack = '/products/'+product.id
const [showModalBooking, setShowModalBooking] = useState(false)

const handleBookingSucced = ()=>{
    setShowModalBooking(!showModalBooking)
}


    return(
        <>
            <BloqueHeader product={product} goBack={goBack}/>
            <div className={styles.main_container}> 
                <div className={styles.container}>   
                    <div className={styles.first_column}>
                        <UserForm/>
                        <BookingDateSelector handleCheckIn = {handleCheckIn} handleCheckOut = {handleCheckOut}/>
                        <BookingTimeSelector/>
                    </div>
                    <div className={styles.second_column}>
                        <BookingDetail handleBookingSucced={handleBookingSucced} checkin={checkin} checkout={checkout} product={product} />
                    </div>
                </div>
                <PolicyAndRules/>
                {showModalBooking&&(<BookingSucced handleBookingSucced={handleBookingSucced}/>)}
            </div>
        </>
    )}
