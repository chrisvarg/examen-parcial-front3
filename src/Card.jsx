import React from "react";

export const Card = ({ data }) => {
  console.log("paso", data);
  return (
    <div className="card__container">
      <p>
        Hola <strong>{data.name}</strong>
      </p>

      <div>
        <p>Gracias por compartir que tu animal favorito es: </p>
        <p className="card-animal">
          <strong>{data.animal}</strong>
        </p>
      </div>
    </div>
  );
};
