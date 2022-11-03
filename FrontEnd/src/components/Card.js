import React from 'react'
import { AiFillStar } from "react-icons/fa";
import { GrStar } from "react-icons/gr";
import { Link } from 'react-router-dom';
import "..//styles/card.css"
const Card = ({img, categoria, nombre, ubicacion, descripcion,id}) => {
  return (
    <div className="card">
    <div className='card-image'>
        <img  className="img-mediana" src={img} alt="img" />
    </div>
    <div className="card-body">
        <span className='font-categoria'>{categoria} <GrStar  className='start' /><GrStar  className='start' /><GrStar  className='start' /><GrStar  className='start' /><GrStar  className='start' /><GrStar  className='start' /> </span>
        
        <h3>{nombre}</h3>
        <h4>{ubicacion}</h4>
        <p>{descripcion}</p>
        <Link to={'/products/'+id}><button className="btn-primary">Ver más</button></Link>

    </div>
    </div>
  )
}

export default Card