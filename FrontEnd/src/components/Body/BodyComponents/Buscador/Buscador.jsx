import React, { useState, useEffect } from "react";
import PlaceSelector from "./BuscadorComponents/PlaceSelector";
import DateSelector from "./BuscadorComponents/DateSelector";
import styles from "./Buscador.module.css"
import {useNavigate } from "react-router-dom";

export default function Buscador ({cityList}) {

  
const navigate = useNavigate();

const [citySelected, setCitySelected] = useState(null);
const handleBuscar = (event) => {
    event.preventDefault()

    if(citySelected!==null){
    navigate(`/filter-by-city/id=${citySelected.id}/${citySelected.ciudad.replace(/ /g,'-')}`)
    }

}

    return(
        <section className={styles.searchBar} aria-label="search">
                <h1 className={styles.searchTitle}>Busca ofertas en hoteles, casas y mucho más</h1>
            <form className={styles.searchBarForm}>
                <PlaceSelector cityList={cityList} citySelected={citySelected} setCitySelected={setCitySelected}/>
                <DateSelector />
                <button className={styles.btn_buscar} onClick={handleBuscar} type="submit">Buscar</button>
            </form>
        </section>
    )
}   