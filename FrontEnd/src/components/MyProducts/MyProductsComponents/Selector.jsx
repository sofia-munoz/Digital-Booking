
import React, { useState } from "react"
import styles from "./Selector.module.css"

export default function Selector({handleSelected, infoList}) {

  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState(null)

  const toggling = () => {
    setIsOpen((prevState) => !prevState)
  }

  const handleClick = (info) => () => {
    setSelectedOption(info.titulo || info.ciudad)
    handleSelected(info)
    setIsOpen(false)
  }

  return (
    <section className={styles.location}>
      <div className={styles.locationSelect}>
        <div
          onClick={toggling}
          className={`${styles.preselectedOption} ${
            selectedOption ? styles.selected : ""
          }`}
        >
          <>{selectedOption || "Elegí una opción"}</>
        </div>

        {isOpen && (
          <div className={styles.listContainer}>
            <ul className={styles.locationSelect}>
              <div className={styles.space} />
              {infoList?.map((info) => (
                <li
                  value={info.titulo || info.ciudad}
                  key={info.id}
                  className={styles.locationSelect}
                  onClick={handleClick(info)}
                >
                  <div className={styles.listContent}>
                    <div className={styles.textContainer}>
                      <div className={styles.cityName}>
                        {info.titulo || info.ciudad}
                        <br />
                      </div>
                    </div>
                    <hr className={styles.divider} />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  )
}

