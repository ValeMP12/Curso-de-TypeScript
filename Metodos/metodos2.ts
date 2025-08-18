//PARAMETRO OPCIONAL
function saludar(nombre: string, saludo?: string): string {
    if (saludo) {
        return `${saludo}, ${nombre}!`;
    } else {
        return `¡Hola, ${nombre}!`;
    }
}

console.log(saludar("Juan"));
console.log(saludar("Pedro", "Buenos días"));

//PARAMETROS MULTIPLES
function sumarTodos(...numeros: number[]): number {
    return numeros.reduce((acum, num) => acum + num, 0);
}
console.log("Resultado de la suma:", sumarTodos(1, 2, 3, 4, 5));

//VALORES POR DEFECTO
function despedir(nombre: string, despedida: string = "Adios"): string {
    return `${despedida}, ${nombre}!`;
}
console.log(despedir("Juan"));
console.log(despedir("Pedro", "Hasta luego"));