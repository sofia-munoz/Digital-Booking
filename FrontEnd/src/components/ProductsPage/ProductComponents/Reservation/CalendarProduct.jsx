import React, { useState, useEffect } from "react"
import DatePicker from "react-datepicker"
import { registerLocale } from "react-datepicker"
import es from "date-fns/locale/es"
import "react-datepicker/dist/react-datepicker.css"
import "../../../Body/BodyComponents/Buscador/BuscadorComponents/calendar.css"

registerLocale("es", es)

export default function Calendar () {
  const [selectedStartDate, setSelectedStartDate] = useState("")
  const [selectedEndDate, setSelectedEndDate] = useState("")
  const [dateRange, setDateRange] = useState([null, null])
  const [startDate, endDate] = dateRange
  const [width, setWidth] = useState(window.innerWidth)
  const handleResize = () => setWidth(window.innerWidth)

  useEffect(() => {
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    if (startDate && endDate) {
      setSelectedStartDate(parseDates(startDate))
      setSelectedEndDate(parseDates(endDate))
    }
  }, dateRange)

  const parseDates = (date) => {
    return (
      date.getFullYear() +
      "-" +
      ("0" + (date.getMonth() + 1)).slice(-2) +
      "-" +
      ("0" + date.getDate()).slice(-2)
    )
  }

  const reservas = [
    {
        "start": "2022-11-12T15:30:00+05:00",
        "end": "2022-12-11T16:30:00+05:00"
    },
    {
        "start": "2023-01-01T16:00:00+05:00",
        "end": "2023-02-02T20:00:00+05:00"
    }
];

const disabledDateRanges = reservas.map(range => ({
    start: new Date(range.start),
    end: new Date(range.end)
}));


  return (
    <DatePicker 
      inline
      selectsRange={true}
      //Language setting
      locale="es"
      dateFormat="dd 'de' MMM"
      //Show more than one month:
      monthsShown={width>767?2:1}
      //Disable previous dates:
      showDisabledMonthNavigation
      minDate={new Date()}
      startDate={startDate}
      endDate={endDate}
      onChange={(update) => {
        setDateRange(update)
      }}
      //Disable automatic close:
      shouldCloseOnSelect={true}
      excludeDateIntervals={disabledDateRanges}
    ></DatePicker>
  )
}
