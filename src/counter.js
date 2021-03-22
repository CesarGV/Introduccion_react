import React, { Fragment, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  const restar = () => {
    setCount(count - 1);
  };

  return (
    <Fragment>
      <button className="btn" onClick={() => handleClick()}>
        Sumar
      </button>
      <br />
      <button className="btn" onClick={() => restar()}>
        Restar
      </button>
      <p>Nuestro contador es: {count}</p>
    </Fragment>
  );
};

export default Counter;
