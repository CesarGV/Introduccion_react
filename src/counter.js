import React, { Fragment, useEffect, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleClick = (aumentar) => {
    if (aumentar) {
      setCount(count + 3);
    } else {
      setCount(count - 1);
    }
  };

  useEffect(() => {
    console.log(`Diste click ${count} veces`);
  });

  return (
    <Fragment>
      <button className="btn" onClick={() => handleClick(true)}>
        Aumentar
      </button>
      <br />
      <button className="btn" onClick={() => handleClick(false)}>
        Disminuir
      </button>
      <p>Nuestro contador es: {count}</p>
    </Fragment>
  );
};

export default Counter;
