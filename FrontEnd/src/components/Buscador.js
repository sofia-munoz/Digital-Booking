import {useState} from 'react'
import DatePicker, {registerLocale} from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import es from 'date-fns/locale/es'
registerLocale("es",es)
const Buscador = () =>{
    
    //se usa un array provisoriamente. Luego hay que usar JSON
    const ciudades = ["Buenos Aires", "Mar del Plata", "Bariloche"]

    const [ciudad, setCiudad] = useState('')
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [error,setError] = useState(false)

    const handleSubmit = (event) =>{event.preventDefault()}
    const handleOnChangeDate = (dates) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
      };

    return(
        <div>
            <h1>Busca ofertas en hoteles, casas y mucho más</h1>
            <form onSubmit={handleSubmit}>
                <select onChange={(e) =>{setCiudad(e.target.value)}} value={ciudad}>
                    <option value="default" hidden>¿A dónde vamos?</option>
                    {ciudades.map((ciudad, index)=><option key={index}>{ciudad}</option>)}
                </select>
                <DatePicker 
                    placeholderText='Check in - Check out'
                    locale="es"
                    dateFormat="dd/MM/yyyy" 
                    selected={startDate} 
                    OnChange= {handleOnChangeDate} 
                    startDate={startDate} 
                    endDate={endDate} 
                    selectsRange 
                    monthsShown={2}>
                    <br></br>
                    <button onClick={()=>{}}>Aplicar</button>
                </DatePicker>
                <button type="submit">Buscar</button>
            </form>
        </div>
    )
}
export default Buscador