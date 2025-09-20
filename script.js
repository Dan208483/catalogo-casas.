const { useState } = React;

const propiedadesIniciales = [
  {
    titulo: "Terreno en Aucallama, Huaral",
    ubicacion: "Huaral, Lima - Perú",
    precio: "US$ 20,000",
    imagen: "https://via.placeholder.com/300?text=Aucallama",
    detalles: "Lote campestre de 200 m² con áreas comunes y seguridad.",
  },
  {
    titulo: "Terreno grande en Lurín",
    ubicacion: "Lurín - Lima",
    precio: "US$ 1,130,000",
    imagen: "https://via.placeholder.com/300?text=Lurin",
    detalles: "8,522 m² con subdivisión, buena ubicación y proyección urbana.",
  },
  {
    titulo: "Casa en Miraflores",
    ubicacion: "Miraflores, Lima - Perú",
    precio: "US$ 250,000",
    imagen: "https://via.placeholder.com/300?text=Miraflores",
    detalles: "Casa de 120 m² con 3 habitaciones, 2 baños y jardín.",
  },
  {
    titulo: "Departamento en San Isidro",
    ubicacion: "San Isidro, Lima - Perú",
    precio: "US$ 300,000",
    imagen: "https://via.placeholder.com/300?text=San+Isidro",
    detalles: "Moderno departamento de 90 m² con 2 habitaciones.",
  },
  {
    titulo: "Casa en Cusco colonial",
    ubicacion: "Centro histórico, Cusco",
    precio: "US$ 150,000",
    imagen: "https://via.placeholder.com/300?text=Cusco",
    detalles: "Casa restaurada, paredes de piedra, arquitectura andina.",
  },
  {
    titulo: "Departamento en Arequipa",
    ubicacion: "Yanahuara, Arequipa",
    precio: "US$ 180,000",
    imagen: "https://via.placeholder.com/300?text=Arequipa",
    detalles: "Departamento con vista al Misti, 3 habitaciones.",
  },
  {
    titulo: "Lote en playa Zorritos",
    ubicacion: "Zorritos, Tumbes",
    precio: "US$ 75,000",
    imagen: "https://via.placeholder.com/300?text=Zorritos",
    detalles: "Terreno frente al mar, ideal para construir bungalow.",
  },
  {
    titulo: "Casa campestre en Cajamarca",
    ubicacion: "Cajamarca rural",
    precio: "US$ 90,000",
    imagen: "https://via.placeholder.com/300?text=Cajamarca",
    detalles: "Casa de campo con vista a las montañas, 1,000 m².",
  }
];

function PropiedadCard({ propiedad }) {
  return (
    <div className="card">
      <img src={propiedad.imagen} alt={propiedad.titulo} />
      <div className="card-body">
        <h3 className="card-title">{propiedad.titulo}</h3>
        <p className="card-location">{propiedad.ubicacion}</p>
        <p>{propiedad.detalles}</p>
        <p className="card-price">{propiedad.precio}</p>
      </div>
    </div>
  );
}

function App() {
  const [propiedades] = useState(propiedadesIniciales);

  return (
    <div className="container">
      {propiedades.map((prop, index) => (
        <PropiedadCard key={index} propiedad={prop} />
      ))}
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
