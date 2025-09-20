const { useState } = React;

const propiedadesIniciales = [
  {
    titulo: "Casa moderna en la ciudad",
    ubicacion: "Lima, Perú",
    precio: "US$ 350,000",
    imagen: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=800&q=80",
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
    imagen: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
    detalles: "Casa familiar con jardín para niños y mascotas.",
  },
  {
    titulo: "Interior moderno y elegante",
    ubicacion: "Barranco, Lima",
    precio: "US$ 320,000",
    imagen: "https://images.unsplash.com/photo-1599420186946-7b5ddf2527b2?auto=format&fit=crop&w=800&q=80",
    detalles: "Departamento con diseño interior moderno y elegante.",
  },
  {
    titulo: "Casa de campo acogedora",
    ubicacion: "Aucallama, Huaral",
    precio: "US$ 180,000",
    imagen: "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=800&q=80",
    detalles: "Casa campestre ideal para desconectar de la ciudad.",
  },
  {
    titulo: "Edificio con seguridad 24/7",
    ubicacion: "Lince, Lima",
    precio: "US$ 400,000",
    imagen: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80",
    detalles: "Edificio moderno con vigilancia y áreas comunes.",
  },
  {
    titulo: "Apartamento luminoso y ventilado",
    ubicacion: "San Borja, Lima",
    precio: "US$ 380,000",
    imagen: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80",
    detalles: "Apartamento con grandes ventanas y mucha luz natural.",
  },
  {
    titulo: "Departamento con piscina",
    ubicacion: "Jesús María, Lima",
    precio: "US$ 600,000",
    imagen: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80",
    detalles: "Departamento con piscina y gimnasio incluidos.",
  },
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

ReactDOM.render(<App />, document.getElementById("root"));
