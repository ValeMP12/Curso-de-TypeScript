var variable;
variable = "Hola, mundo!";
console.log(variable);
variable = 42;
console.log(variable);
variable = true;
console.log(variable);
var variableDesconocida;
//variableDesconocida = "Hola, mundo!";
//console.log(variableDesconocida);
variableDesconocida = 42;
//console.log(variableDesconocida);
//variableDesconocida = true;
//console.log(variableDesconocida);
if (typeof variableDesconocida === "string") {
    console.log("La variableDesconocida es una cadena de texto.");
}
else if (typeof variableDesconocida === "number") {
    console.log("La variableDesconocida es un número.");
}
else if (typeof variableDesconocida === "boolean") {
    console.log("La variableDesconocida es un booleano.");
}
//Tipo de funcion never
/*function throwError(message: string): never {
    throw new Error(message);
}
throwError("¡Error!");*/
// Tipo de sentencia void 
function logMessage(message) {
    console.log("Log Message", message);
}
logMessage("Este es un mensaje de log.");
