// Crear un vector con los número del 1 al 5. Luego elimina el número que está en la posición 2 y recorre el vector.

// Inicializar vector
let numeros = [1, 2, 3, 4, 5];

numeros.splice(2, 1);

// Recorro el vector
for(let i = 0; i < numeros.length; i++) {
  console.log(numeros[i]);
}