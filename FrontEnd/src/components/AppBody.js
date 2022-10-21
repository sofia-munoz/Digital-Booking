import React from "react";
import CardCategoria from "./CardCategoria";
import Card from "./Card";
import "..//styles/appBody.css";

export default function AppBody({ data }) {
  return (
    <>
      <div className="container">
        <h2>Buscar por tipo de alojamiento </h2>
        <div className="card-container-categoria">
          {data.map((dato) => (
            <CardCategoria title={dato.Category} />
          ))}
        </div>
        <div className="container-gris">
        <h2> Recomendaciones </h2>
        <div className="card-container">
        
          {data.map((dato) => (
            <Card
              img={dato.Crimg}
              categoria={dato.Category}
              nombre={dato.Title}
              ubicacion={dato.Location}
              descripcion={dato.Description}
            />
          ))}
        </div>
        </div>
      </div>
    </>
  );
}
