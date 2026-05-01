import React, { useState } from 'react';
import './Banner.css';

export const Banner = () => {
  const [tabActiva, setTabActiva] = useState('oferta');

const contenido = {
  oferta: {
    imagen: '/images/banner.png',
  },

  gaming: {
    tag: '🎮 ZONA GAMING',
    titulo: 'Equipos gaming',
    tituloColor: 'de alto rendimiento',
    sub: 'Laptops gaming, monitores 144Hz y periféricos RGB. Para ganar sin límites.',
    btn1: 'Ver Gaming',
    btn2: 'Armar mi setup',
    descuento: '35%',
  },

  trabajo: {
    tag: '💻 PARA TRABAJAR',
    titulo: 'Equipos para',
    tituloColor: 'profesionales',
    sub: 'Laptops ultradelgadas, monitores 4K y teclados ergonómicos para tu oficina.',
    btn1: 'Ver Laptops',
    btn2: 'Ver Monitores',
    descuento: '30%',
  },
};

  const d = contenido[tabActiva];

  return (
    <section className="banner-wrapper" id="inicio">

      {/* Pestañas */}
      <div className="banner-tabs">
        {[
          { id: 'oferta', label: 'Oferta principal' },
          { id: 'gaming', label: 'Gaming' },
          { id: 'trabajo', label: 'Para trabajo' },
        ].map((tab) => (
          <button
            key={tab.id}
            className={`banner-tab ${tabActiva === tab.id ? 'active' : ''}`}
            onClick={() => setTabActiva(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Banner principal */}
      <div className="banner">

        {/* Si es oferta principal → mostrar solo imagen */}
        {tabActiva === 'oferta' ? (
          <div className="banner-imagen-principal">
            <img
              src={d.imagen}
              alt="Oferta principal"
              className="img-banner-principal"
            />
          </div>
        ) : (
          <>
            {/* Lado izquierdo — texto y CTA */}
            <div className="banner-izq">
              <span className="banner-tag">{d.tag}</span>

              <h1 className="banner-titulo">
                {d.titulo} <span>{d.tituloColor}</span>
              </h1>

              <p className="banner-sub">{d.sub}</p>

              <div className="banner-btns">
                <button className="btn-primario">{d.btn1}</button>
                <button className="btn-secundario">{d.btn2}</button>
              </div>

              {/* Indicadores de confianza */}
              <div className="banner-trust">
                <div className="trust-item">
                  <span className="trust-dot" />
                  Garantía 12 meses
                </div>

                <div className="trust-item">
                  <span className="trust-dot" />
                  Envío gratis Lima
                </div>

                <div className="trust-item">
                  <span className="trust-dot" />
                  Hasta 12 cuotas
                </div>
              </div>
            </div>
          </>
        )}

      </div>
    </section>
  );
};