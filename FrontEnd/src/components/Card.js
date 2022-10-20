import React from 'react'

const Card = ({img}) => {
  return (
    <div className='card-image'>
        <img  className="img-mediana" src={img} alt="img" />
    </div>
  )
}

export default Card