//Arreglo de tipo cadena string
var nombre = ["Juan", "Pedro", "Maria"];
console.log("Nombres: " + nombre);
var edades = [25, 30, 22];
console.log("Edades: " + edades);
//Tipo de arreglo any mixto 
var datos = ["Juan", 25, true];
console.log("Datos: " + datos);
var personas = [
    { nombre: "Juan", edad: 25, esDesarrollador: true },
    { nombre: "Pedro", edad: 30, esDesarrollador: false },
    { nombre: "Maria", edad: 22, esDesarrollador: true }
];
personas.push({ nombre: "Luis", edad: 28, esDesarrollador: false });
console.log("Personas: ", personas);
//DECLARAR Y CREAR TUPLA
var personaTupla = ["Juan", 25, true];
console.log("Tupla Persona: ", personaTupla);
var personaTupla2 = [];
personaTupla2.push(["Pedro", 30, false]);
personaTupla2.push(["Maria", 22, true]);
personaTupla2.forEach(function (persona) {
    console.log("Tupla Persona 2: ", persona);
    var nombre = persona[0];
    var edad = persona[1];
    var esDesarrollador = persona[2];
    console.log("Nombre: ", nombre);
    console.log("Edad: ", edad);
    console.log("Es Desarrollador: ", esDesarrollador);
});
//ENUMERADORES QUE PERMITEN ACOTAR DATOS
var DiaDeLaSemana;
(function (DiaDeLaSemana) {
    DiaDeLaSemana[DiaDeLaSemana["Lunes"] = 0] = "Lunes";
    DiaDeLaSemana[DiaDeLaSemana["Maretes"] = 1] = "Maretes";
    DiaDeLaSemana[DiaDeLaSemana["Miercoles"] = 2] = "Miercoles";
    DiaDeLaSemana[DiaDeLaSemana["Jueves"] = 3] = "Jueves";
    DiaDeLaSemana[DiaDeLaSemana["Viernes"] = 4] = "Viernes";
    DiaDeLaSemana[DiaDeLaSemana["Sabado"] = 5] = "Sabado";
    DiaDeLaSemana[DiaDeLaSemana["Domingo"] = 6] = "Domingo";
})(DiaDeLaSemana || (DiaDeLaSemana = {}));
var dia = DiaDeLaSemana.Lunes;
console.log("Día de la semana: ", DiaDeLaSemana[dia]);
