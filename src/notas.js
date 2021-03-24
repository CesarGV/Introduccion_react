import React, { useState, useEffect } from "react";

const Nota = (props) => {
  const { note } = props;
  return <li>{note.content}</li>;
};

const Notas = (props) => {
  const { notes } = props;
  const [notas, setNotas] = useState(notes);
  const [nuevaNota, setnuevaNota] = useState("");
  const [showImportants, setShowimportants] = useState(false);

  useEffect(() => {
    console.log("Notas", notas);
  }, [notas]);

  const addNote = (e) => {
    e.preventDefault();
    const noteObject = {
      content: nuevaNota,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
      id: notas.length + 1
    };

    setNotas(notas.concat(noteObject));
    setnuevaNota("");
  };

  const showImp = (e) => {
    setShowimportants(!showImportants);
  };
  console.log("showImportants", showImportants);

  const handleNoteChange = (e) => {
    const { target } = e;
    const { value } = target;

    setnuevaNota(value);
  };

  const notasAMostrar = showImportants
    ? notas.filter((note) => note.important === true)
    : notas;

  console.log("Notas a mostrar", notasAMostrar);

  return (
    <div>
      <h1>Notas</h1>
      <button onClick={showImp}>
        Mostrar {showImportants ? "todos" : "importantes"}
      </button>
      <ul>
        {notasAMostrar.map((notes) => (
          <Nota key={notes.id} note={notes} />
        ))}
      </ul>
      <form onSubmit={addNote}>
        <input value={nuevaNota} onChange={handleNoteChange} />
        <button type="submit">Guardar nota</button>
      </form>
    </div>
  );
};

export default Notas;
