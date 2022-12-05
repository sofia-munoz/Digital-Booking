import React, { useState, useEffect } from "react";
import PlaceSelector from "./BuscadorComponents/PlaceSelector";
import DateSelector from "./BuscadorComponents/DateSelector";
import styles from "./Buscador.module.css"
import {useNavigate, useLocation} from "react-router-dom";

export default function Buscador ({cityList}) {

  
const navigate = useNavigate();

const [citySelected, setCitySelected] = useState(null);
const [newDateSelected, setNewDateSelected] = useState(null)
const location = useLocation()

const handleBuscar = (event) => {
    event.preventDefault()
    
        if(citySelected!==null){
                if(newDateSelected!==null){
                    navigate(`/filter-by-city-and-date/id=${citySelected.id}/${citySelected.ciudad.replace(/ /g,'-')}/from=${newDateSelected.fechaInicio}/to=${newDateSelected.fechaFinal}`)
                } else {
                    navigate(`/filter-by-city/id=${citySelected.id}/${citySelected.ciudad.replace(/ /g,'-')}`)
                }
            } else if( newDateSelected!==null) {
            navigate(`/filter-by-date/from=${newDateSelected.fechaInicio}/to=${newDateSelected.fechaFinal}`)
        }
}

    return(
        <section className={styles.searchBar} aria-label="search">
                <h1 className={styles.searchTitle}>Busca ofertas en hoteles, casas y mucho más</h1>
            <form className={styles.searchBarForm}>
                <PlaceSelector citySelected={citySelected} setCitySelected={setCitySelected} cityList={cityList}/>
                <DateSelector setNewDateSelected={setNewDateSelected}/>
                <button className={styles.btn_buscar} onClick={handleBuscar} type="submit">Buscar</button>
            </form>
        </section>
    )
}   