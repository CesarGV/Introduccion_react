import "./styles.css";
import Counter from "./counter";
import Notas from "./notas";
import Cursos from "./cursos";
import Conditional from "./conditional";
import Agendas from "./agenda";

const notes = [
  {
    id: 1,
    content: "HTML es muy fácil.",
    date: "2020-01-01",
    important: true
  },
  {
    id: 2,
    content: "Los navegadores solo pueden ejecutar Javascript, HTML, CSS",
    date: "2020-02-01",
    important: false
  },
  {
    id: 3,
    content: "Para hacer peticiones REST los métodos más usados son GET y POST",
    date: "2020-03-01",
    important: false
  }
];

const diarys = [
  {
    id: 1,
    name: "César",
    tel: "3141600388",
    important: true
  }
];

const courses = [
  {
    name: "Half Stack application development",
    id: 1,
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
        id: 1
      },
      {
        name: "Using props to pass data",
        exercises: 7,
        id: 2
      },
      {
        name: "State of a component",
        exercises: 14,
        id: 3
      },
      {
        name: "Redux",
        exercises: 11,
        id: 4
      }
    ]
  },
  {
    name: "Node.js",
    id: 2,
    parts: [
      {
        name: "Routing",
        exercises: 3,
        id: 1
      },
      {
        name: "Middlewares",
        exercises: 7,
        id: 2
      }
    ]
  }
];

export default function App() {
  return (
    <div>
      <Counter />
      <Notas notes={notes} />
      <Cursos courses={courses} />
      <Conditional />
      <Agendas diarys={diarys} />
    </div>
  );
}
