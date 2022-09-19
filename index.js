var Persona = /** @class */ (function () {
    function Persona(Apellido, Nombre, Dni, Direccion, Telefono, Email) {
        this.Apellido = Apellido;
        this.Nombre = Nombre;
        this.Dni = Dni;
        this.Direccion = Direccion;
        this.Telefono = Telefono;
        this.Email = Email;
    }
    Persona.prototype.agregarPersona = function () {
        console.log('Agregando Persona');
    };
    Persona.prototype.modificarPersona = function () {
        console.log('Modificando Persona');
    };
    Persona.prototype.borrarPersona = function () {
        console.log('Borrando Persona');
    };
    return Persona;
}());
var Profesor = /** @class */ (function () {
    function Profesor(profesor, alumnos, materia, curso) {
        this.profesor = persona;
        this.materia = materia;
        this.alumnos = alumnos;
        this.curso = curso;
    }
    Profesor.prototype.listarAlumnos = function (alumnos) {
        console.log(alumnos);
    };
    Profesor.prototype.listarProfesor = function () {
        console.log('Datos del Profesor: ');
    };
    Profesor.prototype.agregarProfesor = function (persona) {
    };
    return Profesor;
}());
var Alumnos = /** @class */ (function () {
    function Alumnos(alumno, materia, nota) {
        this.alumno = alumno;
        this.materia = materia;
        this.nota = nota;
    }
    Alumnos.prototype.consultarNotas = function (alumno) {
        if (this.nota > 7) {
            console.log('El alumno esta aprobado');
        }
        else {
            console.log('El alumno no esta aprobado');
        }
    };
    return Alumnos;
}());
var Escuela = /** @class */ (function () {
    function Escuela(cue, nombre, direccion, telefono, email, profesor, alumnos) {
        this.cue = cue;
        this.nombre = nombre;
        this.direccion = direccion;
        this.telefono = telefono;
        this.email = email;
        this.profesor = profesor;
        this.alumnos = alumnos;
    }
    Escuela.prototype.matricularAlumno = function (alumno) {
        this.alumnos = alumno;
        console.log('El alumno ha sido matriculado correctamente');
    };
    return Escuela;
}());
var persona = new Persona('Lopez', 'Julio', '34567876', 'Los Lupinos', '2964565676', 'lopezjulio@gmail.com');
var persona1 = new Persona('Benitez', 'Sergio', '35678654', 'Los Guanacos', '29645676543', 'benitez@gmail.com');
var alumnos = [new Alumnos(persona, 'Quimica', 8), new Alumnos(persona, 'Fisica', 6)];
var profesores = new Profesor(persona, alumnos, 'quimica', '5 2');
var escuela = new Escuela(56765434, 'Soberania Nacional', 'Ruta 1 y Alvear', '2964567654', 'soberania@gmail.com', profesores, alumnos);
profesores.listarAlumnos(alumnos);
alumnos[1].consultarNotas(alumnos);
escuela.matricularAlumno(alumnos);
