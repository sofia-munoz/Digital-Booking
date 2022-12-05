import React, {useState} from "react";
import './Checkbox.css'

export default function Checkbox ({amenity, handleSelectAmenity}) {
const [isChecked, setIsChecked] = useState(false)

return(
    <>
        <label key={amenity.id} className="checkbox_content">
            <input type="checkbox" onChange={()=>{
                let checked = !isChecked;
                setIsChecked(checked);

                handleSelectAmenity(checked, amenity.id);
                
            }}/>
            <svg className={`checkbox ${(isChecked ? "checkbox--active" : "")}`}
            aria-hidden="true"
            viewBox="0 0 15 11"
            fill="none">
                <path d="M1 4.5L5 9L14 1"
                strokeWidth="2"
                stroke={isChecked ? "#FFF" : "none"}
                />
            </svg>
            <img src={amenity.iconoURL}/>
            {amenity.caracteristica}
        </label>
    </>
)
}