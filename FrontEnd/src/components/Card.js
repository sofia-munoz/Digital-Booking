import React from "react";

import { GrStar } from "react-icons/gr";
import "..//styles/card.css";
import { HiLocationMarker, HiWifi } from "react-icons/hi";
import { MdPool } from "react-icons/md";

const Card = ({ img, categoria, nombre, ubicacion, descripcion }) => {
  return (
    <div className="card">
      <div className="card-image">
        <img className="img-mediana" src={img} alt="img" />
      </div>
      <div className="card-body">
        <div className="card-title">
          <div>
            <span className="font-categoria">
              {categoria} <GrStar className="start" />
              <GrStar className="start" />
              <GrStar className="start" />
              <GrStar className="start" />
              <GrStar className="start" />{" "}
            </span>
            <h3>{nombre}</h3>
          </div>

          <div className="card-calificacion">
            <span className="calificacion"> 8 </span>
            <span className=""> Muy bueno </span>
          </div>
        </div>

        <h4>
          {" "}
          <HiLocationMarker /> {ubicacion}{" "}
          <span className="card-span"> MOSTRAR EN EL MAPA</span>
        </h4>

        <span className="card-icono">
          {" "}
          <HiWifi /> <MdPool />
        </span>

        <p>
          {descripcion} <span className="card-span"> más...</span>
        </p>

        <button className="btn-primary">Ver más</button>
      </div>
    </div>
  );
};

export default Card;
