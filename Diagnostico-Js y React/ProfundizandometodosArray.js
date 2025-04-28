///Profundizando métodos de Array//
//Productos mayor a 100//

const productos = [
  { nombre: "Notebook", precio: 1200 },
  { nombre: "Mouse", precio: 20 },
  { nombre: "Teclado", precio: 50 },
  { nombre: "Monitor", precio: 300 },
  { nombre: "Auriculares", precio: 80 },
];

const productosCaros = productos.filter((producto) => producto.precio > 100);
console.log(productosCaros);

//Array con formato Notebook//

const productosFormato = productos.map(
  (producto) => `${producto.nombre}: $${producto.precio}`
);
console.log(productosFormato);

// Calcular precio total de productos//

const precioTotal = productos.reduce(
  (total, producto) => total + producto.precio,
  0
);
console.log(precioTotal);

// Precio menor a 100 y minuscula//

const productosBaratos = productos
  .filter((producto) => producto.precio < 100)
  .map((producto) => producto.nombre.toLowerCase());

console.log(productosBaratos);
