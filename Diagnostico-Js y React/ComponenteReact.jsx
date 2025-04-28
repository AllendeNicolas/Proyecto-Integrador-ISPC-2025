///PROMER COMPONENTE EN REACT
const Saludo = ({ nombre }) => <h1>Hola {nombre}</h1>;

//

const Presentacion = ({ nombre, edad, profesion }) => (
  <p>
    {nombre} tiene {edad} años y trabaja como {profesion}.
  </p>
);
