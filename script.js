const { useState } = React;

const propiedadesIniciales = [
  {
    titulo: "Terreno en Aucallama, Huaral",
    ubicacion: "Huaral, Lima - Perú",
    precio: "US$ 20,000",
    imagen: "https://tse4.mm.bing.net/th/id/OIP.D9cWxtjqsEKYGehaTkERKQHaHa?pid=Api",
    detalles: "Lote campestre de 200 m² con áreas comunes y seguridad.",
  },
  {
    titulo: "Terreno grande en Lurín",
    ubicacion: "Rinconada de Puruhuay, Lurín - Lima",
    precio: "US$ 1,130,000",
    imagen: "https://tse1.mm.bing.net/th/id/OIP.HRkDvbcNxzmstqIgw36STQHaFj?pid=Api",
    detalles: "8,522 m² con subdivisión, buena ubicación y proyección urbana.",
  },
  {
    titulo: "Casa en Miraflores",
    ubicacion: "Miraflores, Lima - Perú",
    precio: "US$ 250,000",
    imagen: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=60",
    detalles: "Casa de 120 m² con 3 habitaciones, 2 baños y jardín.",
  },
    {
    titulo: "Departamento en San Isidro",
    ubicacion: "San Isidro, Lima - Perú",
    precio: "US$ 300,000",
    imagen: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=60",
    detalles: "Moderno departamento de 90 m² con 2 habitaciones y vista a la ciudad.",
  },
  {
    titulo: "Casa Moderna en Lima",
    ubicacion: "Lima, Perú",
    precio: "US$ 350,000",
    imagen: "https://images.unsplash.com/photo-1560185127-6a1a47bcde4e?auto=format&fit=crop&w=600&q=80",
    detalles: "Casa moderna con acabados de lujo y amplio jardín."
  },
  {
    titulo: "Apartamento en Miraflores",
    ubicacion: "Miraflores, Lima - Perú",
    precio: "US$ 220,000",
    imagen: "https://images.unsplash.com/photo-1501183638714-94c44f4e8b44?auto=format&fit=crop&w=600&q=80",
    detalles: "Departamento céntrico con vista a la ciudad."
  },
  {
    titulo: "Terreno campestre en Cañete",
    ubicacion: "Cañete, Lima - Perú",
    precio: "US$ 60,000",
    imagen: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    detalles: "Terreno ideal para proyectos agrícolas o recreativos."
  },
  {
    titulo: "Casa con Jardín en San Isidro",
    ubicacion: "San Isidro, Lima - Perú",
    precio: "US$ 400,000",
    imagen: "https://images.unsplash.com/photo-1572120360610-d971b9b0b4a9?auto=format&fit=crop&w=600&q=80",
    detalles: "Amplia casa con jardín, piscina y seguridad 24/7."
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

function FormAgregarPropiedad({ propiedad }) {
  const [titulo, setTitulo] = useState("");
  const [ubicacion, setUbicacion] = useState("");
  const [precio, setPrecio] = useState("");
  const [imagen, setImagen] = useState("");
  const [detalles, setDetalles] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!titulo || !ubicacion || !precio || !imagen || !detalles) {
      alert("Por favor completa todos los campos.");
      return;
    }

    const nuevaPropiedad = { titulo, ubicacion, precio, imagen, detalles };
    onAgregar(nuevaPropiedad);

    setTitulo("");
    setUbicacion("");
    setPrecio("");
    setImagen("");
    setDetalles("");
  };

  return (
    <div className="form-container">
      <h2>Agregar Nueva Propiedad</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="titulo">Título</label>
          <input
            type="text"
            id="titulo"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            placeholder="Ej: Casa en Miraflores"
          />
        </div>
        <div className="form-group">
          <label htmlFor="ubicacion">Ubicación</label>
          <input
            type="text"
            id="ubicacion"
            value={ubicacion}
            onChange={(e) => setUbicacion(e.target.value)}
            placeholder="Ej: Miraflores, Lima - Perú"
          />
        </div>
        <div className="form-group">
          <label htmlFor="precio">Precio</label>
          <input
            type="text"
            id="precio"
            value={precio}
            onChange={(e) => setPrecio(e.target.value)}
            placeholder="Ej: US$ 250,000"
          />
        </div>
        <div className="form-group">
          <label htmlFor="imagen">URL de Imagen</label>
          <input
            type="url"
            id="imagen"
            value={imagen}
            onChange={(e) => setImagen(e.target.value)}
            placeholder="https://..."
          />
        </div>
        <div className="form-group">
          <label htmlFor="detalles">Detalles</label>
          <textarea
            id="detalles"
            value={detalles}
            onChange={(e) => setDetalles(e.target.value)}
            placeholder="Descripción breve de la propiedad"
          />
        </div>
        <button type="submit" className="submit-btn">Agregar Propiedad</button>
      </form>
    </div>
  );
}

function App() {
  const [propiedades, setPropiedades] = useState(propiedadesIniciales);

  const agregarPropiedad = (nueva) => {
    setPropiedades([nueva, ...propiedades]);
  };

  return (
    <>
      <div className="container">
        {propiedades.map((prop, index) => (
          <PropiedadCard key={index} propiedad={prop} />
        ))}
      </div>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
