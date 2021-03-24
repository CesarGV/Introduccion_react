import React, { Fragment } from "react";

const Conditional = (props) => {
  const totalMessages = 0;
  if (totalMessages > 0) {
    console.log("No tienes mensajes");
  } else {
    console.log("No tienes mensajes");
  }

  return (
    <Fragment>
      <h1>Condicional</h1>
      {totalMessages > 0 && <h2>Tienes mensajes</h2>}
      {totalMessages > 0 ? (
        <h2>Tienes mensajes</h2>
      ) : (
        <h2>No tienes mensajes</h2>
      )}
    </Fragment>
  );
};

export default Conditional;
