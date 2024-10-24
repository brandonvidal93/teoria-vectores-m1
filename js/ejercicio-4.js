// Crear un vector con los números del 1 al 10. Usa un ciclo para sumar todos los numeros en el vector y mostrar el resultado

// Definir vector de tipo Number
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Definir variable para almacenar la suma
let suma = 0;

// Recorrer el vector para sumar los numeros
for(let i = 0; i < numeros.length; i++) {
  suma = suma + numeros[i];
}

console.log("La suma es: " + suma);