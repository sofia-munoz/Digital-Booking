import React from "react";
import CardCategoria from "./CardCategoria";
import Card from "./Card";

export default function AppBody({ data }) {
  return (
    <>
      <div className="container">
        <h2>Buscar por tipo de alojamiento </h2>
        <div className="card-body">
          {data.map((dato) => (
            <CardCategoria title={dato.Category} />
          ))}
        </div>
        <h2> Recomendaciones </h2>
        <div className="card-body">
          {data.map((dato) => (
            <Card img={dato.Crimg} />
          ))}
        </div>    

      </div>
    </>
  );
}
