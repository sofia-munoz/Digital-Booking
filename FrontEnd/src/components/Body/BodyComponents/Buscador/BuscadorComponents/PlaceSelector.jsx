import { FaMapMarkerAlt } from "react-icons/fa"
import { GoLocation } from "react-icons/go"
import React, { useState } from "react"
import styles from "./placeSelector.module.css"

export default function PlaceSelector({cityList, citySelected, setCitySelected}) {

  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState(null)

  const toggling = () => {
    if(cityList==null || cityList.length==0) return;
    setIsOpen((prevState) => !prevState)
  }

  const handleClick = (city) => () => {
    setSelectedOption(city.ciudad)
    setCitySelected(city)
    setIsOpen(false)
  }

  const orderedCities = (cities) => {
    return cities.sort((c1, c2) => {
      if (c1.name > c2.name) {
        return 1
      }
      if (c1.name < c2.name) {
        return -1
      }
      return 0
    })
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
          <div className={styles.iconPreselected}>
            <FaMapMarkerAlt />
          </div>
          <>{selectedOption || "¿A dónde vamos?"}</>
        </div>

        {isOpen && (
          <div className={styles.listContainer}>
            <ul className={styles.locationSelect}>
              <div className={styles.space} />
              {orderedCities(cityList)?.map((city) => (
                <li
                  value={city.ciudad}
                  key={city.id}
                  className={styles.locationSelect}
                  onClick={handleClick(city)}
                >
                  <div className={styles.listContent}>
                    <div className={styles.textContainer}>
                      <div className={styles.icon}>
                        <GoLocation />
                      </div>
                      <div className={styles.cityName}>
                        {city.ciudad}
                        <br />
                        {/* <span className={styles.country}>Argentina</span> */}
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

