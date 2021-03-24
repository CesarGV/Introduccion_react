import React from "react";

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
          {courses.map((course) => (
            <h2>{course.name}</h2>
          ))}
        </div>
      </ul>
    </div>
  );
};

export default Cursos;
