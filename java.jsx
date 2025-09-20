const { useState } = React;

const propiedadesIniciales = [
    {
        titulo: "Casa moderna en la ciudad",
        ubicacion: "Lima, Perú",
        precio: "US$ 350,000",
        imagen: "imagen: "https://i.postimg.cc/tu-imagen-ap1.jpg",
        detalles: "Casa moderna con diseño minimalista y espacios abiertos.",
      },
      {
        titulo: "Departamento con vista panorámica",
        ubicacion: "Miraflores, Lima",
        precio: "US$ 450,000",
        imagen: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
        detalles: "Departamento con balcón y vista a la ciudad.",
      },
      {
        titulo: "Casa con jardín amplio",
        ubicacion: "San Isidro, Lima",
        precio: "US$ 500,000",
        imagen: "https://via.placeholder.com/300x180?text=Casa+Jardin",
        detalles: "Casa familiar con jardín para niños y mascotas.",
      },
      {
        titulo: "Interior moderno y elegante",
        ubicacion: "Barranco, Lima",
        precio: "US$ 320,000",
        imagen: "https://images.unsplash.com/photo-1597092276647-7ca6b7b1297b?auto=format&fit=crop&w=800&q=80",
        detalles: "Departamento con diseño interior moderno y elegante.",
      },
      {
        titulo: "Casa de campo acogedora",
        ubicacion: "Aucallama, Huaral",
        precio: "US$ 180,000",
        imagen: "https://images.unsplash.com/photo-1501183638714-1f0f35a34b55?auto=format&fit=crop&w=800&q=80",
        detalles: "Casa campestre ideal para desconectar de la ciudad.",
      },
      {
        titulo: "Edificio con seguridad 24/7",
        ubicacion: "Lince, Lima",
        precio: "US$ 400,000",
        imagen: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=80",
        detalles: "Edificio moderno con vigilancia y áreas comunes.",
      },
      {
        titulo: "Apartamento luminoso y ventilado",
        ubicacion: "San Borja, Lima",
        precio: "US$ 380,000",
        imagen: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=800&q=80",
        detalles: "Apartamento con grandes ventanas y mucha luz natural.",
      },
      {
        titulo: "Departamento con piscina",
        ubicacion: "Jesús María, Lima",
        precio: "US$ 600,000",
        imagen: "https://images.unsplash.com/photo-1505692952047-35e74fcb27ef?auto=format&fit=crop&w=800&q=80",
        detalles: "Departamento con piscina y gimnasio incluidos.",
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
