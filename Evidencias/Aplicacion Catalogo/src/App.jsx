import axios from "axios";
import { useEffect, useState } from "react";

import "./App.css";

const App = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [showProductList, setShowProductList] = useState(true);
  const [showStatsPanel, setShowStatsPanel] = useState(true);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((response) => {
        setProducts(response.data.products);
      })
      .catch((error) => {
        console.error("Error al obtener los productos:", error);
      });
  }, []);

  ///Filtro de Busqueda y Funciones///

  const filteredProducts = products.filter((product) =>
    product.title?.toLowerCase().includes(search.toLowerCase())
  );

  console.log("Productos filtrados:", filteredProducts);

  const totalProducts = filteredProducts.length;

  const maxProduct = Math.max(
    ...filteredProducts.map((product) => product.price)
  );

  const minProduct = Math.min(
    ...filteredProducts.map((product) => product.price)
  );

  const cantProductoVeinteCaracteres = filteredProducts.filter(
    (product) => product.title && product.title.length > 20
  ).length;

  const precioTotalProductosFiltrados = filteredProducts.reduce(
    (total, product) => total + (product.price || 0),
    0
  );

  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl text-blue-600 font-bold">
        "CATALOGO DE PRODCUTOS"
      </h1>

      <br />
      <br />
      <br />

      <input
        type="text"
        placeholder="¿Que estás buscando?"
        value={search}
        onChange={(e) => {
          console.log("Valor de búsqueda:", e.target.value);
          setSearch(e.target.value);
        }}
      />
      <br />
      <br />
      <hr />
      <br />
      <h1>
        <strong className="text-green-800">LISTA DE PRODUCTOS</strong>
      </h1>
      <br />
      <br />

      <button
        onClick={() => setShowProductList(!showProductList)}
        className={`px-6 py-2 rounded-lg font-bold text-lg transition-colors duration-300
    ${
      showProductList
        ? "bg-red-900 text-white hover:bg-red-700"
        : "bg-green-900 text-white hover:bg-green-700"
    }`}
      >
        {showProductList ? "OCULTAR LISTA" : "MOSTRAR"}
      </button>
      <br />

      {showProductList && (
        <ul className="animate_fadeIn">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {filteredProducts.map((product) => (
              <li
                key={product.id}
                className="border p-4 rounded-lg shadow-md bg_white hover:shadow-lg transition-shadow duration-200"
              >
                <h2 className="text-lg font-semibold">{product.title} </h2>
                <p className="text-violet-700">Precio: ${product.price}</p>
              </li>
            ))}
          </div>
        </ul>
      )}

      {filteredProducts.length === 0 && (
        <div>
          <strong className="text-red-500">
            "¡NO SE ENCONTRARON PRODUCTOS!"
          </strong>
        </div>
      )}

      <br />
      <br />
      <hr />
      <br />

      <button
        onClick={() => setShowStatsPanel(!showStatsPanel)}
        className={`px-6 py-2 rounded-lg font-bold text-lg transition-colors duration-300
    ${
      showStatsPanel
        ? "bg-red-900 text-white hover:bg-red-700"
        : "bg-green-900 text-white hover:bg-green-700"
    }`}
      >
        {showStatsPanel ? "OCULTAR ESTADISTICA" : "MOSTRAR ESTADISTICA"}
      </button>

      {showStatsPanel && (
        <div className="bg_gray_100 p-6 rounded-lg shadow-md mt-6 transition_transform duration-300 transform hover:scale-105">
          <h2 className="text-gray-800">
            <strong className="text-gray-700">Análisis y Estadísticas</strong>
          </h2>
          <br />

          <p>
            PRECIO TOTAL DE PRODUCTOS FILTRADOS: $
            {precioTotalProductosFiltrados}
          </p>
          <br />

          <p>PRODUCTOS TOTALES: {totalProducts}</p>
          <br />

          <p>PRODUCTO MÁS CARO: {maxProduct}</p>
          <br />

          <p>PRODUCTO MÁS ECONÓMICO: {minProduct}</p>
          <br />

          <p>
            PRODUCTOS CON MÁS DE 20 CARACTERES: {cantProductoVeinteCaracteres}
          </p>
          <br />
        </div>
      )}
    </div>
  );
};

export default App;
