import React from 'react'

const Card = ({img, categoria, nombre, ubicacion, descripcion}) => {
  return (
    <div className="card">
    <div className='card-image'>
        <img  className="img-mediana" src={img} alt="img" />
    </div>
    <div className="card-body">
        <span className='font-categoria'>{categoria}</span>
        <h3>{nombre}</h3>
        <h4>{ubicacion}</h4>
        <p>{descripcion}</p>
        <button className="btn-primary">Ver más</button>

    </div>
    </div>
  )
}

export default Card