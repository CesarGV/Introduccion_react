import React, { useState, useEffect } from "react";

const Agenda = (props) => {
  const { diary } = props;
  return (
    <li>
      {diary.name} | {diary.tel}
    </li>
  );
};

const Agendas = (props) => {
  const { diarys } = props;
  const [agendas, setAgendas] = useState(diarys);
  const [nuevaAgenda, setnuevaAgenda] = useState("");
  const [nuevoNumero, setnuevoNumero] = useState("");
  const [showImportants, setShowimportants] = useState(false);

  useEffect(() => {
    console.log("Agenda", agendas);
  }, [agendas]);

  const addDiary = (e) => {
    e.preventDefault();
    const diaryObject = {
      name: nuevaAgenda,
      tel: nuevoNumero,
      important: Math.random() < 0.5,
      id: agendas.length + 1
    };

    setAgendas(agendas.concat(diaryObject));
    setnuevaAgenda("");
    setnuevoNumero("");
  };

  const showImp = (e) => {
    setShowimportants(!showImportants);
  };
  console.log("showImportants", showImportants);

  const handleNoteChange = (e) => {
    const { target } = e;
    const { value } = target;

    setnuevaAgenda(value);
  };

  const handleNumberChange = (e) => {
    const { target } = e;
    const { value } = target;

    if (agendaAMostrar.filter((diary) => value === diary.tel).length > 0) {
      alert("El número ya existe");
    } else if (value.length > 10) {
      alert("El número debe ser de máximo 10 digitos");
    } else {
      setnuevoNumero(value);
    }
  };

  const agendaAMostrar = showImportants
    ? agendas.filter((diary) => diary.important === true)
    : agendas;

  console.log("Agendas a mostrar", agendaAMostrar);

  return (
    <div>
      <h1>Agenda teléfonica</h1>
      <button onClick={showImp}>
        Mostrar {showImportants ? "todos" : "importantes"}
      </button>
      <ul>
        {agendaAMostrar.map((diarys) => (
          <Agenda key={diarys.id} diary={diarys} />
        ))}
      </ul>
      <form onSubmit={addDiary}>
        <input
          placeholder="Nombre de la persona"
          value={nuevaAgenda}
          onChange={handleNoteChange}
          required
        />
        <input
          placeholder="Número teléfonico"
          value={nuevoNumero}
          onChange={handleNumberChange}
          required
        />
        <button type="submit">Guardar</button>
      </form>
    </div>
  );
};

export default Agendas;
