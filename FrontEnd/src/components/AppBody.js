import React from "react";
import CardCategoria from "./CardCategoria";
import Card from "./Card";
import "..//styles/appBody.css";
import Buscador from "./Buscador";
import {getCiudades} from '../data/ciudades'

export default function AppBody({ data, categorias }) {
  return (
    <>
      <Buscador dataCiudades={getCiudades()}/>
      <div className="container">
        <h2>Buscar por tipo de alojamiento </h2>
        <div className="card-container-categoria">
          {categorias.map((dato, index) => (
            <CardCategoria title={dato.Category} img={dato.Crimg} key={index}/>
          ))}
        </div>
        <div className="container-gris">
        <h2> Recomendaciones </h2>
        <div className="card-container">
        
          {data.map((dato, index) => (
            <Card
              img={dato.Crimg}
              categoria={dato.Category}
              nombre={dato.Title}
              ubicacion={dato.Location}
              descripcion={dato.Description}
              key={index}
            />
          ))}
        </div>
        </div>
      </div>
    </>
  );
}
