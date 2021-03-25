import React, { Fragment, useState, useEffect } from "react";

const Rest = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    console.log("1er vez renderizado");
    loadUsers();
  }, []);

  const loadUsers = async () => {
    console.log("Cargando usuarios...");
    /* fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        console.log("Fin");
      });
    */
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    setUsers(users);
    console.log("Fin");
  };
  console.log("Users", users);
  return (
    <Fragment>
      <h1>REST | Usuarios</h1>
      {users.length === 0 ? (
        <p>No hay usuarios aún...</p>
      ) : (
        <p>Mostrando usuarios...</p>
      )}
      {users.map((user) => {
        const { name, email } = user;
        return (
          <p>
            Nombre: {name} | Email: {email}
          </p>
        );
      })}
    </Fragment>
  );
};

export default Rest;
