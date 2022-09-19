class Persona {
    private Apellido: string;
    private Nombre: string;
    private Dni:string;
    private Direccion:string;
    private Telefono:string;
    private Email: string;

    constructor(Apellido:string, Nombre:string,Dni:string,Direccion:string,Telefono:string,Email:string){
        this.Apellido = Apellido;
        this.Nombre = Nombre;
        this.Dni = Dni;
        this.Direccion = Direccion;
        this.Telefono = Telefono;
        this.Email = Email;
    }

    public agregarPersona():void{
         console.log('Agregando Persona');
    }
    public modificarPersona():void{
        console.log('Modificando Persona'); 
    }
    public borrarPersona():void{
        console.log('Borrando Persona'); 
    }
}

class Profesor {
    private profesor: Persona; 
    private alumnos : Alumnos[];
    private materia: string;
    private curso: string;
    constructor (profesor: Persona, alumnos: Alumnos[], materia:string,curso:string){
        this.profesor= persona;
        this.materia = materia;
        this.alumnos = alumnos;
        this.curso = curso;
    }

    
   public listarAlumnos(alumnos){
        console.log(alumnos);
    }

    public listarProfesor(){
        console.log('Datos del Profesor: ')
    }

   public agregarProfesor(persona){
     
   } 
    


}

class Alumnos {
    private alumno: Persona;
    private materia: string;
    private nota: number;
    constructor (alumno: Persona,materia:string, nota:number){
        this.alumno = alumno;
        this.materia = materia;
        this.nota = nota;
    }

    public consultarNotas(alumno){

        if (this.nota > 7){
            console.log('El alumno esta aprobado');
        }
        else {
            console.log('El alumno no esta aprobado');
        }
      
    }
}

class Escuela {
    private cue:number;
    private nombre: string;
    private direccion: string;
    private telefono: string;
    private email: string;
    private profesor: Profesor;
    private alumnos: Alumnos[];
    constructor (cue:number, nombre: string, direccion: string, telefono: string, email:string, profesor:Profesor, alumnos:Alumnos[]){
        this.cue = cue;
        this.nombre = nombre;
        this.direccion = direccion;
        this.telefono = telefono;
        this.email = email;
        this.profesor = profesor;
        this.alumnos = alumnos;

    }
    public matricularAlumno(alumno){
        this.alumnos = alumno;
        console.log('El alumno ha sido matriculado correctamente');
    }
}

let persona:Persona = new Persona('Lopez', 'Julio','34567876','Los Lupinos','2964565676','lopezjulio@gmail.com');
let persona1:Persona = new Persona('Benitez','Sergio','35678654','Los Guanacos','29645676543','benitez@gmail.com');
let alumnos:Alumnos[] = [new Alumnos(persona,'Quimica',8), new Alumnos(persona1,'Fisica',6)];

let profesores:Profesor = new Profesor(persona, alumnos,'quimica','5 2');

let escuela:Escuela = new Escuela(56765434,'Soberania Nacional','Ruta 1 y Alvear','2964567654','soberania@gmail.com',profesores,alumnos);
profesores.listarAlumnos(alumnos);
alumnos[1].consultarNotas(alumnos);
escuela.matricularAlumno(alumnos);

