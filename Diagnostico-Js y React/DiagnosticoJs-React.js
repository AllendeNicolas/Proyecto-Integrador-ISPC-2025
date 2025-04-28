// Diagnóstico Proyecto Integrador //

//Actividad 1 - Fundamentos de JavaScript//

const Nombre = "Ana";
const Edad = 22;

console.log(`Hola, me llamo ${Nombre} y tengo ${Edad} años.`);

//Actividad 2 //

const numeros = [3, 7, 12, 5, 2];

// Array con números al cuadrado //
const alCuadrado = numeros.map((num) => num ** 2);
console.log(alCuadrado);

// Filtrar números mayores a 5
const mayor5 = numeros.filter((num) => num > 5);
console.log(Mayor5);

// Actividad 3 - Función Flecha - Par o Impar//

const esParOImpar = (num) => (num % 2 === 0 ? "Par" : "Impar");

console.log(esParOImpar(4)); // da numero par
console.log(esParOImpar(7)); // da numero impar

//CONSIGANA 2- DESESTRUCTURACIÓN - OBJETOS//

const persona = {
  nombre: "Lucía",
  edad: 28,
  profesion: "Diseñadora",
};

// Desestructuración//

const { nombre, edad, profesion } = persona;
console.log(`${nombre} tiene ${edad} años y trabaja como ${profesion}.`);

// Agregar propiedad "ciudad"//
persona.ciudad = "Rosario";
console.log(persona);

//callback a cada elemento de un array//

const procesar = (array, callback) => array.map(callback);

console.log(procesar([1, 2, 3], (x) => x * 2));
