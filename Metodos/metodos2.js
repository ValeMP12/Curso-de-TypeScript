function saludar(nombre, saludo) {
    if (saludo) {
        return "".concat(saludo, ", ").concat(nombre, "!");
    }
    else {
        return "\u00A1Hola, ".concat(nombre, "!");
    }
}
console.log(saludar("Juan"));
console.log(saludar("Pedro", "Buenos días"));
//PARAMETROS MULTIPLES
function sumarTodos() {
    var numeros = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numeros[_i] = arguments[_i];
    }
    return numeros.reduce(function (acum, num) { return acum + num; }, 0);
}
console.log("Resultado de la suma:", sumarTodos(1, 2, 3, 4, 5));
//VALORES POR DE FECTO
function despedir(nombre, despedida) {
    if (despedida === void 0) { despedida = "Adios"; }
    return "".concat(despedida, ", ").concat(nombre, "!");
}
console.log(despedir("Juan"));
console.log(despedir("Pedro", "Hasta luego"));
