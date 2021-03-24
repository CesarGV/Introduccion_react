import React, { Fragment } from "react";

const Curso = (props) => {
  const { course } = props;
  console.log(course);

  return <li>{Curso.content}</li>;
};

const Cursos = (props) => {
  const { courses } = props;

  return (
    <div>
      <h1>Cursos</h1>
      <ul>
        <div>
          {courses.map((course) => {
            console.log(course);
            const { name, id, parts } = course;
            let totalExercise = 0;
            return (
              <Fragment>
                <h2>{name}</h2>
                {parts.map((part) => {
                  const { name, exercises, id } = part;
                  totalExercise = totalExercise + exercises;
                  return (
                    <p>
                      {name} | {exercises}
                    </p>
                  );
                })}
                <p>Total de ejercicios: {totalExercise}</p>
              </Fragment>
            );
          })}
        </div>
      </ul>
    </div>
  );
};

export default Cursos;
