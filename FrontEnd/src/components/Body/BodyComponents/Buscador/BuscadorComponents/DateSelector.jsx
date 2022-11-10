import Calendar from "./Calendar"
import { FaCalendarDay } from "react-icons/fa"
import "./calendar.css"
import styles from "./dateSelector.module.css"

export default function DateSelector() {
  return (
    <section className={styles.calendar}>
      <FaCalendarDay className={styles.calendarIcon} />
      <Calendar name="date" label="date" />
    </section>
  )
}
