import React, { useState, useEffect } from 'react';
import './Navbar.css';

import {
  FaLaptop,
  FaDesktop,
  FaKeyboard,
  FaMouse,
  FaHeadphones,
  FaUser,
  FaShoppingCart,
  FaSearch,
  FaFire,
  FaTag
} from "react-icons/fa";

export const Navbar = ({ cartCount }) => {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [busqueda, setBusqueda] = useState('');
  const [dropdownAbierto, setDropdownAbierto] = useState(null);

  const categorias = [
    {
      nombre: 'Laptops',
      id: 'laptops',
      href: '#laptops',
      icono: <FaLaptop />,
      subcategorias: [
        { nombre: 'Para estudiantes', badge: 'Popular', tipo: 'pop' },
        { nombre: 'Para oficina' },
        { nombre: 'Gaming', badge: 'Oferta', tipo: 'off' },
        { nombre: 'Ultradelgadas' },
      ],
      marcas: 'HP · Lenovo · Asus · Dell',
    },
    {
      nombre: 'Monitores',
      id: 'monitores',
      href: '#monitores',
      icono: <FaDesktop />,
      subcategorias: [
        { nombre: 'Full HD' },
        { nombre: '4K' },
        { nombre: 'Gaming 144Hz+', badge: 'Oferta', tipo: 'off' },
        { nombre: 'Curvos' },
      ],
      marcas: 'Samsung · LG · AOC',
    },
    {
      nombre: 'Teclados',
      id: 'teclados',
      href: '#teclados',
      icono: <FaKeyboard />,
      subcategorias: [
        { nombre: 'Mecánicos', badge: 'Nuevo', tipo: 'new' },
        { nombre: 'Inalámbricos' },
        { nombre: 'Gaming RGB' },
        { nombre: 'Compactos' },
      ],
    },
    {
      nombre: 'Mouse',
      id: 'mouse',
      href: '#mouse',
      icono: <FaMouse />,
      subcategorias: [
        { nombre: 'Inalámbrico' },
        { nombre: 'Gaming', badge: 'Oferta', tipo: 'off' },
        { nombre: 'Ergonómico' },
        { nombre: 'Con cable' },
      ],
    },
    {
      nombre: 'Auriculares',
      id: 'auriculares',
      href: '#auriculares',
      icono: <FaHeadphones />,
      subcategorias: [
        { nombre: 'Gaming', badge: 'Nuevo', tipo: 'new' },
        { nombre: 'Inalámbricos' },
        { nombre: 'Con micrófono' },
        { nombre: 'In-ear / TWS' },
      ],
    },
  ];

  useEffect(() => {
    const handleFuera = (e) => {
      if (!e.target.closest('.cat-item')) {
        setDropdownAbierto(null);
      }
    };

    document.addEventListener('mousedown', handleFuera);
    return () => document.removeEventListener('mousedown', handleFuera);
  }, []);

  const toggleDropdown = (id) => {
    setDropdownAbierto(dropdownAbierto === id ? null : id);
  };

  const handleBusqueda = (e) => {
    e.preventDefault();
    console.log('Buscando:', busqueda);
  };

  const badgeClass = (tipo) => {
    if (tipo === 'pop') return 'badge badge-pop';
    if (tipo === 'new') return 'badge badge-new';
    return 'badge badge-off';
  };

  return (
    <header>
      <div className="promo-bar">
        Envío gratis en Lima desde S/ 199
        <span className="promo-sep">|</span>
        Hasta 12 cuotas sin intereses
        <span className="promo-sep">|</span>
        Garantía oficial 12 meses
      </div>

      <nav className="navbar">
        <a href="#inicio" className="navbar-logo">
          Tech<span>Store</span>
        </a>

        <form className="navbar-search" onSubmit={handleBusqueda}>
          <input
            type="text"
            placeholder="Buscar laptops, monitores, teclados..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
          />
          <button type="submit" aria-label="Buscar">
            <FaSearch />
          </button>
        </form>

        <div className="navbar-acciones">
          <a href="#cuenta" className="btn-cuenta">
            <FaUser />
            <span>Mi cuenta</span>
          </a>

          <a href="#carrito" className="btn-carrito">
            <FaShoppingCart />
            <span>Carrito</span>
            {cartCount > 0 && (
              <span className="badge-carrito">{cartCount}</span>
            )}
          </a>
        </div>

        <button
          className="navbar-hamburguesa"
          onClick={() => setMenuAbierto(!menuAbierto)}
          aria-label="Abrir menú"
        >
          ☰
        </button>
      </nav>

      <div className={`navbar-cats ${menuAbierto ? 'abierto' : ''}`}>
        <ul className="cats-list">
          {categorias.map((cat) => (
            <li key={cat.id} className="cat-item">
              <button
                className={`cat-btn ${dropdownAbierto === cat.id ? 'active' : ''}`}
                onClick={() => toggleDropdown(cat.id)}
              >
                {cat.icono}
                <span>{cat.nombre}</span>
                <span className={`chevron ${dropdownAbierto === cat.id ? 'open' : ''}`}>
                  ▼
                </span>
              </button>

              {dropdownAbierto === cat.id && (
                <ul className="dropdown">
                  {cat.subcategorias.map((sub) => (
                    <li key={sub.nombre}>
                      <a href={cat.href} onClick={() => setDropdownAbierto(null)}>
                        <span>{sub.nombre}</span>
                        {sub.badge && (
                          <span className={badgeClass(sub.tipo)}>
                            {sub.badge}
                          </span>
                        )}
                      </a>
                    </li>
                  ))}

                  {cat.marcas && (
                    <>
                      <li><div className="dropdown-sep" /></li>
                      <li>
                        <a
                          href={cat.href}
                          className="dropdown-marcas"
                          onClick={() => setDropdownAbierto(null)}
                        >
                          {cat.marcas}
                        </a>
                      </li>
                    </>
                  )}
                </ul>
              )}
            </li>
          ))}

          <li className="cat-item">
            <a href="#ofertas" className="cat-btn">
              <FaTag />
              <span>Ofertas</span>
            </a>
          </li>

          <li className="cat-item">
            <a href="#remates" className="cat-btn cat-remates">
              <FaFire />
              <span>Remates</span>
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};