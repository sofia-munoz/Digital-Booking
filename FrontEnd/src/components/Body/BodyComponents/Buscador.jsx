import React from "react";
import PlaceSelector from "./BuscadorComponents/PlaceSelector";
import DateSelector from "./BuscadorComponents/DateSelector";
import styles from "./Buscador.module.css"

export default function Buscador () {
    return(
        <section className={styles.searchBar} aria-label="search">
                <h1 className={styles.searchTitle}>Busca ofertas en hoteles, casas y mucho más</h1>
            <form className={styles.searchBarForm}>
                <PlaceSelector />
                <DateSelector />
                <button className={styles.btn_buscar} type="submit">Buscar</button>
            </form>
        </section>
    )
}   