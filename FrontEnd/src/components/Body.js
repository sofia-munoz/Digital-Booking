import React, { useState, useEffect } from "react";
import CardCategoria from "./CardCategoria";
import Card from "./Card";
import "..//styles/Body.css";
import Buscador from "./Buscador";
import {getCiudades} from '../data/ciudades'


export default function Body({ data }) {
  const [categoryCard, setCategoryCard] = useState(null)
  const [productCard, setProductCard] = useState(null)
    const urlCategorias = 'http:localhost:8080/categorias'
    const urlProductos = 'http:localhost:8080/productos'
    const settings ={
                   method: 'GET'
                  }

  return (
    <>
      <Buscador dataCiudades={getCiudades()}/>
      <div className="container-categorias">
        <h2>Buscar por tipo de alojamiento </h2>
        <div className="card-container-categoria">
          {useEffect(() => {
            fetch(urlCategorias, settings)
              .then((response) => response.json())
              .then(data => setCategoryCard(data))
              .catch((err) => console.error(err))
          }, [  ])}
            {!categoryCard&&(console.log("loading..."))}
            {categoryCard&&
                  (categoryCard.map((data, index) => (
                    <CardCategoria title={data.titulo} 
                                  img={data.imagenURL} 
                                  info={data.descripcion} 
                                  key={index}
                                  id={data.id}/>)
                  ))} 
        </div>
      </div>
      <div className="container-recomendaciones">
        <h2> Recomendaciones </h2>
        <div className="card-container">{
          useEffect(() => {
            fetch(urlProductos, settings)
              .then((response) => response.json())
              .then(data => setProductCard(data))
              .catch((err) => console.error(err))
          }, [  ])}

            {!productCard&&(console.log("loading..."))}
            {productCard&&
                (productCard.map((data, index) => (
                      <Card nombre={data.titulo}
                            img={data.imagen_principal}
                            categoria={data.categoria.titulo}
                            ubicacion={data.ubicacion}
                            descripcion={data.descripcion}
                            key={index}
                            id={data.id}/>)
            ))}
        </div>
        </div>
    </>
  );
}
