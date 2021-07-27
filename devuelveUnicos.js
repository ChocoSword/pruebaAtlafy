var input = ['a', 'b', 'c', 'c']

var result = [];

result = devuelveUnicos(input);
console.log(result);


/**
 * Devuelve los strings unicos dentro del array que se le pasa por parametro
 * @param {Object} array   Array con strings a comparar.
 */
function devuelveUnicos(input) {

    var respuesta = [];
    var repetidos = [];

    repetidos = elementosRepetidos(input);

    for (i = 0; i < input.length; i++) {
        // Si no se encuentran string repetidas en el array 'input' y no existen aun en el resultado, se añaden al resultado.
        // if (!repetidos.includes(input[i]) || respuesta.includes(input[i])) {
            if (!repetidos.includes(input[i])) {
            respuesta.push(input[i])
        }
    }

    return respuesta;
}

/**
 * Devuelve un array con los que estan repetidos dentro del parametro introducido
 * @param {Object} array   Array con strings a sacar repetidos.
 */
function elementosRepetidos(data) {

    var elementosABorrar = [];

    // Recorremos el mismo array con dos indices diferentes
    for (i = 0; i < data.length; i++) {
        for (x = 0; x < data.length; x++) {
            // Si no estamos en la misma posicion, y coinciden los strings.
            if (i != x && data[i] == data[x]) {
                // Si no existe ese elemento en el array lo añadimos
                if (!elementosABorrar.includes(data[i])) {
                    elementosABorrar.push(data[i]);
                }
            }
        }
    }
    return elementosABorrar;
}
