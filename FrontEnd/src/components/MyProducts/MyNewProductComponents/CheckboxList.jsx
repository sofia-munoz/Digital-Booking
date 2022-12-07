import React from "react";
import Checkbox from "./Checkbox"

export default function AmenitiesCheckboxes ({amenityList, selectedAmenities , handleSelectedAmenities}) {

const handleSelect = (selected, amenityID) =>{
    let amenities = [...selectedAmenities];

    if(selected){
        amenities.push(amenityID)
    }
    else{
        let index = amenities.indexOf(amenityID);
        
        if(index === -1) return;

        amenities.splice(index, 1);
    }
    
    handleSelectedAmenities(amenities);
}

const generateCheckboxList = () =>{
    let list = [];

    amenityList.forEach(amenity => {
        list.push(<Checkbox key={amenity.id} amenity={amenity} handleSelectAmenity ={handleSelect}/>)
    });

    return list;
}

return(
    <>
        {generateCheckboxList()}
    </>
)
}