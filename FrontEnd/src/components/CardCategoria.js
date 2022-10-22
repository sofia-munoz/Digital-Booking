import React from "react";

const CardCategoria = ({ title, img }) => {
  return (
    <>
      <div className="card-categoria">
        <img className="img-categoria" src={img} alt="img" />
        <h2>{title}</h2>
      </div>
    </>
  );
};

export default CardCategoria;
