import React from "react";
import BloqueHeader from "../ProductsPage/ProductComponents/BloqueHeader/BloqueHeader";
import styles from "./BookingPage.module.css"
import UserForm from "./UserForm/UserForm";
import BookingDateSelector from "./Calendar/BookingDateSelector";
import BookingTimeSelector from "./TimeSelector/BookingTimeSelector";
import BookingDetail from "./BookingDetail/BookingDetail";
import PolicyAndRules from "../ProductsPage/ProductComponents/Policy/PolicyAndRules";

export default function ProductPage ({handleCheckIn, handleCheckOut, checkin, checkout, product}) {
const goBack = '/products/'+product.id
const booking = true

    return(
        <>  
            <BloqueHeader product={product} goBack={goBack}/>
            <div className={styles.container}>   
                <div className={styles.first_column}>
                    <UserForm/>
                    <BookingDateSelector booking={booking} handleCheckIn = {handleCheckIn} handleCheckOut = {handleCheckOut}/>
                    <BookingTimeSelector/>
                </div>
                <div className={styles.second_column}>
                    <BookingDetail checkin={checkin} checkout={checkout} product={product} />
                </div>
            </div>
            <PolicyAndRules/>
        </>
    )}
