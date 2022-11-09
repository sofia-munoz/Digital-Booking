import React, { useState } from "react";
import PlaceSelector from "./BuscadorComponents/PlaceSelector";
import DateSelector from "./BuscadorComponents/DateSelector";
import styles from "./Buscador.module.css"
import { Link } from "react-router-dom";

export default function Buscador () {
const [city, setCity] = useState(null);


const handleBuscar = (event) => {
    event.preventDefault()
    console.log("city on click "+city)
    if(city == null) return;
    {<Link to={`/city/${city.id}`}/>}
}



    return(
        <section className={styles.searchBar} aria-label="search">
                <h1 className={styles.searchTitle}>Busca ofertas en hoteles, casas y mucho más</h1>
            <form className={styles.searchBarForm}>
                <PlaceSelector />
                <DateSelector />
                <button className={styles.btn_buscar} onClick={handleBuscar} type="submit">Buscar</button>
            </form>
        </section>
    )
}   