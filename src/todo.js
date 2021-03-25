import React, { Fragment, useState, useEffect } from "react";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [showCompleted, setShowcompleted] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    console.log("Cargando usuarios...");
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const todos = await response.json();
    setTodos(todos.slice(0, 20));
    console.log("Fin");
  };
  console.log("TO-DO", todos);

  const showCom = (e) => {
    setShowcompleted(!showCompleted);
  };

  const todosAMostrar = showCompleted
    ? todos.filter((todo) => todo.completed === true)
    : todos;

  return (
    <Fragment>
      <h1>REST | TO - DO</h1>
      {todos.length === 0 ? (
        <p>No hay información aún...</p>
      ) : (
        <Fragment>
          <p>Mostrando datos...</p>
          <button onClick={showCom}>
            Mostrar {showCompleted ? "Todas" : "Completadas"}
          </button>
        </Fragment>
      )}
      {todosAMostrar.map((todo) => {
        const { title, id } = todo;
        return (
          <p>
            Nota #{id}: {title}
          </p>
        );
      })}
    </Fragment>
  );
};

export default Todo;
