import React from 'react'
import { AiFillStar } from "react-icons/fa";
import { GrStar } from "react-icons/gr";
import "..//styles/card.css"
const Card = ({img, categoria, nombre, ubicacion, descripcion}) => {
  return (
    <div className="card">
    <div className='card-image'>
        <img  className="img-mediana" src={img} alt="img" />
    </div>
    <div className="card-body">
        <span className='font-categoria'>{categoria} <GrStar  className='start' /><GrStar  className='start' /><GrStar  className='start' /><GrStar  className='start' /><GrStar  className='start' /><GrStar  className='start' /> </span>
        <span className="calificacion"> 8 </span>
        <h3>{nombre}</h3>
        <h4>{ubicacion}</h4>
        <p>{descripcion} <span className='card-span'> más...</span></p>
        <button className="btn-primary">Ver más</button>

    </div>
    </div>
  )
}

export default Card