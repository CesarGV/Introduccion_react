import React, { Fragment } from "react";

const Asincrono = () => {
  const uno = () => {
    setTimeout(() => {
      console.log("Uno");
    }, 0);
    dos();
    console.log("Tres");
  };

  const dos = () => {
    console.log("Dos");
  };

  const handleClick = () => {
    console.log("Inicio");
    uno();
    console.log("Fin");
  };

  const handleClickSincrono = () => {
    console.log("Inicio");
    uno();
    console.log("Fin");
  };

  return (
    <Fragment>
      <h1>Asincrono | Sincrono</h1>
      <button onClick={handleClick}>Click ASINCRONO</button>
      <button onClick={handleClickSincrono}>Click SINCRONO</button>
    </Fragment>
  );
};

export default Asincrono;
