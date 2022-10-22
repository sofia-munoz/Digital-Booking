import {useState} from 'react'
import DatePicker, {registerLocale} from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import es from 'date-fns/locale/es'
registerLocale("es",es)
import {dataCiudades} from '../data/ciudades'

const Buscador = () =>{

    const [ciudad, setCiudad] = useState('')
    const [openCalendar, setOpenCalendar]= useState(false)
    const [dateRange, setDateRange] = useState([null, null]);
    const [startDate, endDate] = dateRange;
    const[inputCalendar, setInputCalendar]= useState('Check in - Check out')

    const months = ["ene.", "feb.", "mar.", "abr.", "may.", "jun.", "jul.", "ago.", "sep.", "oct.", "nov.", "dic."];
    const formatoFecha = ()=>{
    if (endDate === null) {setInputCalendar('Check in - Check out')} else{setInputCalendar(`${startDate.getDate()} de ${months[startDate.getMonth()]} - ${endDate.getDate()} de ${months[endDate.getMonth()]}`)}
    }

    const handleSubmit = (event) =>{event.preventDefault()}

    const handleCalendar = (e) => {
        e.preventDefault()
        setOpenCalendar(true);
      };

    return(
        <div>
            <h1>Busca ofertas en hoteles, casas y mucho más</h1>
            <form onSubmit={handleSubmit}>
                <select onChange={(e) =>{setCiudad(e.target.value)}} value={ciudad}>
                    <option value="default" hidden>¿A dónde vamos?</option>
                    {dataCiudades.map((ciudad, index)=>
                    <option key={index}>
                        {`${ciudad.Ciudad} ${ciudad.Pais}`}
                    </option>)}
                </select>
            <>
                <button onClick={handleCalendar}>
                {inputCalendar}
                </button>
                {openCalendar && (
                <DatePicker 
                renderCustomHeader={({
                    monthDate,
                    customHeaderCount,
                    decreaseMonth,
                    increaseMonth,
                }) => (
                    <div>
                    <button
                        aria-label="Previous Month"
                        className={
                        "react-datepicker__navigation react-datepicker__navigation--previous"
                        }
                        style={customHeaderCount === 1 ? { visibility: "hidden" } : null}
                        onClick={decreaseMonth}
                    >
                        <span
                        className={
                            "react-datepicker__navigation-icon react-datepicker__navigation-icon--previous"
                        }
                        >
                        {"<"}
                        </span>
                    </button>
                    <span className="react-datepicker__current-month">
                        {monthDate.toLocaleString("es", {
                        month: "long",
                        })}
                    </span>
                    <button
                        aria-label="Next Month"
                        className={
                        "react-datepicker__navigation react-datepicker__navigation--next"
                        }
                        style={customHeaderCount === 0 ? { visibility: "hidden" } : null}
                        onClick={increaseMonth}
                    >
                        <span
                        className={
                            "react-datepicker__navigation-icon react-datepicker__navigation-icon--next"
                        }
                        >
                        {">"}
                        </span>
                    </button>
                    </div>
                )}
                    placeholderText='Check in - Check out'
                    inline 
                    monthsShown={2}
                    selectsRange={true}
                    startDate={startDate}
                    endDate={endDate}
                    onChange={(update) => {
                        setDateRange(update)
                    }}
                    >
                    <br></br>
                    <button onClick={(e) => {setOpenCalendar(false); formatoFecha()}}>Aplicar</button>
                </DatePicker>
                )}
                </>
                <button type="submit">Buscar</button>
            </form>
        </div>
    )
}
export default Buscador