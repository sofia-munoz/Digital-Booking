import React from "react";
import CardCategoria from "./CardCategoria";



export default function AppBody({data}) {
  return (
    <>
      <div className="container">
      <h1>Buscar por tipo de alojamiento </h1>
        <div className="card-body">
        
        {
            data.map ((dato) => <CardCategoria title={dato.Title} />)
            }

            </div>

        
      </div>
    </>
  );
}
