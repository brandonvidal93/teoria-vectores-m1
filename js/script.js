// Cómo se inicializa un vector
let vector = []; // Vector vacío

// Vector con información
let nombres = ["Carlos", "Juan", "Pepe", "María", "Luis", "Brayan", "Michael", "Cathe", "Andrés"];

// Imprimir o escribir todo el vector
console.log("Vector: " + nombres);

// Imprimir o escribir un solo dato del vector
console.log("El nombre que está en la posición 1 es: " + nombres[1]);

// Recorrer un vector
for(let i = 0; i < nombres.length; i++) {
  console.log(nombres[i]);
}

// Agregar información a un vector
nombres.push("Stiven");

console.log(nombres);

for(let i = 0; i < nombres.length; i++) {
  console.log(nombres[i]);
}

// Elimina información
nombres.splice(1, 2);

console.log(nombres);