const natalia = {
  name: "Natalia",
  age: 20,
  cursosAprobados: [
    "Curso definitivo de HTML y CSS",
    "Curso Práctico de HTML y CSS",
  ],
  aprobarCurso(nuevoCurso) {
    this.cursosAprobados.push(nuevoCurso);
  },
};

function Student(name, age, cursosAprobados) {
  this.name = name;
  this.age = age;
  this.cursosAprobados = cursosAprobados;
}

Student.prototype.aprobarCurso = function (nuevoCurso) {
  this.cursosAprobados.push(nuevoCurso);
};

const Juanita = new Student("Juanita", 28, [
  "Curso definitivo de Python",
  "Curso de HTML",
]);

//Ahora se trabajará con clases

class Student2 {
  constructor({ name, age, cursosAprobados = [], email }) {
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;
    this.email = email;
  }
  aprobarCurso(nuevoCurso) {
    this.cursosAprobados.push(nuevoCurso);
  }
}

const Miguel = new Student2({
  name: "Miguel",
  age: 23,
  cursosAprobados: [
    "curso de coordinación en el trabajo",
    "curso de manejo del tiempo",
  ],
});
