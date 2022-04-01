class LearningPaths {
  constructor({ name, numberClasses, timeLenght }) {
    this.name = name;
    this.listCourses = listCourses;
    this.timeLenght = timeLenght;
  }
}

const escuelaWeb = new LearningPaths({
  name: "Escuela de Desarrollo Web",
  listCourses: ["Curso definitivo de HTML", "Curso de CSS", "Curso de JS"],
  timeLenght: 2345,
});

const escuelaDS = new LearningPaths({
  name: "Escuela de Data Science",
  listCourses: [
    "Introducción a Python",
    "Visualización de base de datos",
    "Visualización de datos en Mongo",
  ],
  timeLenght: 1563,
});

const escuelaVGS = new LearningPaths({
  name: "Escuela de Videojuegos",
  listCourses: [
    "Introducción a UnrealEngine",
    "Introducción a C++",
    "Modelado de entornos en Blender",
  ],
  timeLenght: 564,
});

class Student {
  constructor({
    name,
    username,
    email,
    twitter = undefined,
    instagram = undefined,
    facebook = undefined,
    aprovedCourses = [],
    learningPaths = [],
  }) {
    this.name = name;
    this.username = username;
    this.email = email;
    this.socialMedia = {
      twitter,
      instagram,
      facebook,
    };
    this.aprovedCourses = aprovedCourses;
    this.learningPaths = learningPaths;
  }
}

const Enrique = new Student({
  name: "Enrique",
  username: "enrigios",
  email: "octenrique@gmail.com",
  twitter: "enrigios",
});

const Diana = new Student({
  name: "Diana",
  username: "dianasof",
  email: "diansof@gmail.com",
  instagram: "diansof",
});
