import React, { useState } from 'react';
import './ProductList.css';

const allProducts = [
  {
    id: 1,
    titulo: "Laptop Pro 15",
    descripcion: "Intel Core i9, 32GB RAM, RTX 4060, 1TB SSD.",
    precio: 4299,
    categoria: "laptop",
    badge: "OFERTA",
    estrellas: 5,
    reviews: 128,
    image: "https://picsum.photos/seed/laptop1/400/320",
  },
  {
    id: 2,
    titulo: 'Monitor 4K 27"',
    descripcion: "Panel IPS 144Hz, HDR400, ideal para diseño y gaming.",
    precio: 1299,
    categoria: "monitor",
    badge: "NUEVO",
    estrellas: 5,
    reviews: 84,
    image: "https://picsum.photos/seed/monitor1/400/320",
  },
  {
    id: 3,
    titulo: "Teclado Mecánico RGB",
    descripcion: "Switches Cherry MX Red, retroiluminación RGB completa.",
    precio: 289,
    categoria: "periferico",
    badge: null,
    estrellas: 4,
    reviews: 210,
    image: "https://picsum.photos/seed/teclado1/400/320",
  },
  {
    id: 4,
    titulo: "Mouse Gaming Pro",
    descripcion: "Sensor óptico 25K DPI, 6 botones programables, RGB.",
    precio: 149,
    categoria: "periferico",
    badge: "OFERTA",
    estrellas: 5,
    reviews: 342,
    image: "https://picsum.photos/seed/mouse1/400/320",
  },
  {
    id: 5,
    titulo: "Auriculares 7.1 ANC",
    descripcion: "Cancelación activa de ruido, sonido envolvente 7.1.",
    precio: 399,
    categoria: "audio",
    badge: null,
    estrellas: 4,
    reviews: 97,
    image: "https://picsum.photos/seed/audio1/400/320",
  },
  {
    id: 6,
    titulo: 'Laptop Gaming 17"',
    descripcion: "Ryzen 9 7945HX, RTX 4070, pantalla 165Hz.",
    precio: 5999,
    categoria: "laptop",
    badge: "NUEVO",
    estrellas: 5,
    reviews: 56,
    image: "https://picsum.photos/seed/laptop2/400/320",
  },
  {
    id: 7,
    titulo: 'Monitor Curvo 32"',
    descripcion: "VA 165Hz, 1ms, resolución QHD 2560x1440.",
    precio: 899,
    categoria: "monitor",
    badge: null,
    estrellas: 4,
    reviews: 143,
    image: "https://picsum.photos/seed/monitor2/400/320",
  },
  {
    id: 8,
    titulo: "Headset Streaming",
    descripcion: "Micrófono cardioide, compatible PC, PS5 y Xbox.",
    precio: 199,
    categoria: "audio",
    badge: null,
    estrellas: 4,
    reviews: 188,
    image: "https://picsum.photos/seed/headset1/400/320",
  },
];

const CATEGORIAS = [
  { id: "todos", label: "Todos" },
  { id: "laptop", label: "Laptops" },
  { id: "monitor", label: "Monitores" },
  { id: "periferico", label: "Periféricos" },
  { id: "audio", label: "Audio" },
];

const Estrellas = ({ n }) => (
  <div className="ts-stars">
    {Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={i < n ? "star filled" : "star"}>★</span>
    ))}
  </div>
);

const ProductCard = ({ product, onAdd }) => (
  <div className="ts-card">
    {product.badge && (
      <span className={`ts-badge ${product.badge === "NUEVO" ? "nuevo" : "oferta"}`}>
        {product.badge}
      </span>
    )}
    <div className="ts-card-img-wrap">
      <img
        className="ts-card-img"
        src={product.image}
        alt={product.titulo}
        loading="lazy"
      />
    </div>
    <div className="ts-card-body">
      <p className="ts-card-cat">{product.categoria}</p>
      <h3 className="ts-card-title">{product.titulo}</h3>
      <div className="ts-card-rating">
        <Estrellas n={product.estrellas} />
        <span className="ts-card-reviews">({product.reviews})</span>
      </div>
      <p className="ts-card-desc">{product.descripcion}</p>
      <div className="ts-card-footer">
        <div className="ts-card-precio">
          <span className="ts-precio-moneda">S/</span>
          {product.precio.toLocaleString()}
        </div>
        <button className="ts-btn-agregar" onClick={() => onAdd(product)}>
          + Agregar
        </button>
      </div>
    </div>
  </div>
);

export const ProductList = ({ onAddToCart }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoria, setCategoria] = useState("todos");

  const filteredProducts = allProducts.filter((p) => {
    const matchSearch =
      p.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.descripcion.toLowerCase().includes(searchTerm.toLowerCase());
    const matchCat = categoria === "todos" || p.categoria === categoria;
    return matchSearch && matchCat;
  });

  return (
    <section className="ts-section" id="productos">

      <div className="ts-section-header">
        <h2 className="ts-section-titulo">Catálogo de Productos</h2>
        <p className="ts-section-sub">Equipos y periféricos de alto rendimiento</p>
      </div>

      {/* Buscador */}
      <div className="ts-buscador-wrap">
        <span className="ts-buscador-icon">🔍</span>
        <input
          type="text"
          className="ts-buscador"
          placeholder="Buscar producto..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Filtros por categoría */}
      <div className="ts-filtros">
        {CATEGORIAS.map((cat) => (
          <button
            key={cat.id}
            className={`ts-filtro ${categoria === cat.id ? "activo" : ""}`}
            onClick={() => setCategoria(cat.id)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Contador */}
      <p className="ts-contador">
        Mostrando{" "}
        <strong>{filteredProducts.length}</strong>{" "}
        producto{filteredProducts.length !== 1 ? "s" : ""}
      </p>

      {/* Grid de productos */}
      <div className="ts-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAdd={onAddToCart}
            />
          ))
        ) : (
          <p className="ts-no-resultados">
            No se encontraron productos para tu búsqueda.
          </p>
        )}
      </div>

    </section>
  );
};
