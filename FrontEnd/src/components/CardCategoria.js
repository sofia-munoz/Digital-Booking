import React from "react";

const CardCategoria = ({ title, img, info }) => {
  return (
    <>
      <div className="card-categoria">
        <img className="img-categoria" src={img} alt="img" />
        <h2>{title}</h2>
        <span className="card-categoria-span"> {info}</span>
      </div>
    </>
  );
};

export default CardCategoria;
