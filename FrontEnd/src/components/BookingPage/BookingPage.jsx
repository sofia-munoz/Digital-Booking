import React from "react";
import BloqueHeader from "../ProductsPage/ProductComponents/BloqueHeader/BloqueHeader";
import styles from "./BookingPage.module.css"
import UserForm from "./UserForm/UserForm";
import BookingDateSelector from "./Calendar/BookingDateSelector";
import BookingTimeSelector from "./TimeSelector/BookingTimeSelector";
import BookingDetail from "./BookingDetail/BookingDetail";
import PolicyAndRules from "../ProductsPage/ProductComponents/Policy/PolicyAndRules";

export default function ProductPage ({product}) {
const goBack = '/products/'+product.id
    return(
        <>  
            <BloqueHeader product={product} goBack={goBack}/>
            <div className={styles.container}>   
                <div className={styles.first_column}>
                    <UserForm/>
                    <BookingDateSelector/>
                    <BookingTimeSelector/>
                </div>
                <div className={styles.second_column}>
                    <BookingDetail product={product}/>
                </div>
            </div>
            <PolicyAndRules/>
        </>
    )}
