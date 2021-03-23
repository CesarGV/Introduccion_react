import React from "react";

const Nota = (props) => {
  const { note } = props;
  console.log(note);

  return <li>{note.content}</li>;
};

const Notas = (props) => {
  const { notes } = props;

  return (
    <div>
      <h1>Notas</h1>
      <ul>
        {notes.map((note) => (
          <Nota key={note.id} note={note} />
        ))}
      </ul>
    </div>
  );
};

export default Notas;
