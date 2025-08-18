//Arreglo de tipo cadena string

let nombre: string[] = ["Juan", "Pedro", "Maria"];
console.log("Nombres: " + nombre); 

let edades: number[] = [25, 30, 22];
console.log("Edades: " + edades);

//Tipo de arreglo any mixto 
let datos: any[] = ["Juan", 25, true];
console.log("Datos: " + datos);

//AREREGLO DE TIPO INTERFACE
interface Persona {
    nombre:string;
    edad: number;
    esDesarrollador: boolean;
}

let personas: Persona[] = [
    { nombre: "Juan", edad: 25, esDesarrollador: true },
    { nombre: "Pedro", edad: 30, esDesarrollador: false },
    { nombre: "Maria", edad: 22, esDesarrollador: true }
];

personas.push({ nombre: "Luis", edad: 28, esDesarrollador: false });
console.log("Personas: ", personas);

//DECLARAR Y CREAR TUPLA
let personaTupla: [string, number, boolean] = ["Juan", 25, true];
console.log("Tupla Persona: ", personaTupla);

let personaTupla2: [string, number, boolean][] = [];
personaTupla2.push(["Pedro", 30, false]);
personaTupla2.push(["Maria", 22, true]);

personaTupla2.forEach((persona) => {
    console.log("Tupla Persona 2: ", persona);

    let nombre: string = persona[0];
    let edad: number = persona[1];
    let esDesarrollador: boolean = persona[2];

    console.log("Nombre: ", nombre);
    console.log("Edad: ", edad);
    console.log("Es Desarrollador: ", esDesarrollador);
});

//ENUMERADORES QUE PERMITEN ACOTAR DATOS
enum DiaDeLaSemana {
    Lunes,
    Maretes,
    Miercoles,
    Jueves,
    Viernes,
    Sabado,
    Domingo
}

let dia: DiaDeLaSemana = DiaDeLaSemana.Lunes;
console.log("Día de la semana: ", DiaDeLaSemana[dia]); 