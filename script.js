const { useState } = React;

const propiedadesIniciales = [
  {
    titulo: "Terreno Aucallama",
    ubicacion: "Huaral",
    precio: "US$20,000",
    imagen: "https://via.placeholder.com/300x180?text=Aucallama",
    detalles: "Lote de 200m²."
  },
  {
    titulo: "Terreno Lurín",
    ubicacion: "Lurín",
    precio: "US$1,130,000",
    imagen: "https://via.placeholder.com/300x180?text=Lurin",
    detalles: "Terreno grande."
  },
  {
    titulo: "Casa Miraflores",
    ubicacion: "Miraflores",
    precio: "US$250,000",
    imagen: "https://via.placeholder.com/300x180?text=Miraflores",
    detalles: "Casa con jardín."
  },
  {
    titulo: "Depto San Isidro",
    ubicacion: "San Isidro",
    precio: "US$300,000",
    imagen: "https://via.placeholder.com/300x180?text=San+Isidro",
    detalles: "Moderno departamento."
  },
  {
    titulo: "Casa Barranco",
    ubicacion: "Barranco",
    precio: "US$180,000",
    imagen: "https://via.placeholder.com/300x180?text=Barranco",
    detalles: "Casa acogedora."
  },
  {
    titulo: "Casa Surco",
    ubicacion: "Surco",
    precio: "US$420,000",
    imagen: "https://via.placeholder.com/300x180?text=Surco",
    detalles: "Casa amplia."
  },
  {
    titulo: "Terreno Pachacámac",
    ubicacion: "Pachacámac",
    precio: "US$60,000",
    imagen: "https://via.placeholder.com/300x180?text=Pachacamac",
    detalles: "Terreno residencial."
  },
  {
    titulo: "Depto Magdalena",
    ubicacion: "Magdalena",
    precio: "US$220,000",
    imagen: "https://via.placeholder.com/300x180?text=Magdalena",
    detalles: "Vista panorámica."
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
      {propiedades.map((prop, i) => (
        <PropiedadCard key={i} propiedad={prop} />
      ))}
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
