class Student {
  constructor({
    name,
    email,
    username,
    twitter = undefined,
    instagram = undefined,
    facebook = undefined,
    approvedCourses = [],
    learningPaths = [],
  }) {
    this.name = name;
    this.email = email;
    this.username = username;
    this.socialMedia = {
      twitter,
      instagram,
      facebook,
    };
    this.approvedCourses = approvedCourses;
    this.learningPaths = learningPaths;
  }
}

// class courses {
//   constructor({ id, name, teacher, lessons = [] }) {
//     this.id = id;
//     this.name = name;
//     this.teacher = teacher;
//     this.lesson = lesson;
//   }
// }

// class LearningPath {
//   constructor({ id, name, courses = [] }) {
//     this.id = id;
//     this.name = name;
//     this.courses = [];
//   }

//   addCourse(course) {
//     this.courses.push(course);
//   }

//   replaceCourse(oldCourse, newCourse) {
//     const oldCourseIndex = this.courses.findIndex(
//       (course) => course.id === oldCourse.id
//     );
//     if (oldCourseIndex !== -1) {
//       this.courses[oldCourseIndex] = newCourse;
//     }
//     return this.courses;
//   }

//   deletCourse(oldCourse) {
//     const courseIndex = this.courses.findIndex(
//       (course) => course.id === oldCourse.id
//     );
//     this.courses.splice(courseIndex, 1);
//     return this.courses;
//   }
// }

class Course {
  constructor({ name, clases = [] }) {
    this._name = name;
    this.clases = clases;
  }

  get name() {
    return this._name;
  }

  set name(nuevoNombre) {}
}

class LearningPath {
  constructor({ name, courses = [] }) {
    this.name = name;
    this.courses = courses;
  }
}

const cursoProgBasica = new Course({
  name: "Curso Gratis de Programación Básica",
});

const escuelaWeb = new LearningPath({
  name: "Escuela de Desarrollo Web",
  courses: ["Curso definitivo de HTML y CSS", "Curso práctico de HTML y CSS"],
});

const escuelaData = new LearningPath({
  name: "Escuela de Data Science",
  courses: ["Curso DataBusiness", "Curso Dataviz"],
});

const escuelaVgs = new LearningPath({
  name: "Escuela de Videojuegos",
  courses: ["Curso de Unity", "Curso de Unreal"],
});

const Juan = new Student({
  name: "juanDC",
  username: "juandc",
  email: "juanDC@hotmail.com",
  twitter: "fjuancd",
});

const Miguel = new Student({
  name: "Miguel",
  username: "miguelito",
  email: "miguel@hotmail.com",
  email: "miguelito",
});
