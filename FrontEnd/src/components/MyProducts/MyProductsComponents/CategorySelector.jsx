
import React, { useState } from "react"
import CategoryList from '../../../mocks/api/categories.json'
import styles from "./categorySelector.module.css"

export default function CategorySelector({handleCategory}) {

  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState(null)

  const toggling = () => {
    setIsOpen((prevState) => !prevState)
  }

  const handleClick = (category) => () => {
    setSelectedOption(category.titulo)
    handleCategory(category)
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
          <>{selectedOption || "Seleccioná una categoría"}</>
        </div>

        {isOpen && (
          <div className={styles.listContainer}>
            <ul className={styles.locationSelect}>
              <div className={styles.space} />
              {CategoryList?.map((category) => (
                <li
                  value={category.titulo}
                  key={category.id}
                  className={styles.locationSelect}
                  onClick={handleClick(category)}
                >
                  <div className={styles.listContent}>
                    <div className={styles.textContainer}>
                      <div className={styles.cityName}>
                        {category.titulo}
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

