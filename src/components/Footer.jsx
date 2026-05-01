import React, { useState } from "react";
import "./Footer.css";

export const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletter = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <footer className="footer">

      {/* FRANJA TRUST — como Hiraoka/Coolbox */}
      <div className="footer-trust-bar">
        <div className="footer-trust-item">
          <span className="footer-trust-icon">🔒</span>
          <span>Compra 100% segura</span>
        </div>
        <div className="footer-trust-item">
          <span className="footer-trust-icon">🚚</span>
          <span>Envío gratis en Lima</span>
        </div>
        <div className="footer-trust-item">
          <span className="footer-trust-icon">🔧</span>
          <span>Garantía oficial 12 meses</span>
        </div>
        <div className="footer-trust-item">
          <span className="footer-trust-icon">↩️</span>
          <span>Devoluciones hasta 30 días</span>
        </div>
        <div className="footer-trust-item">
          <span className="footer-trust-icon">💳</span>
          <span>Hasta 12 cuotas sin intereses</span>
        </div>
      </div>

      {/* CUERPO PRINCIPAL */}
      <section className="footer-main">

        {/* Columna 1 — Brand + redes + newsletter */}
        <div className="footer-brand">
          <img src="/public/images/logo.png" alt="TechStore" className="footer-logo" />
          <p>
            Tecnología original para gaming, oficina y estudio. Compra segura,
            garantía oficial y atención especializada en Perú.
          </p>
          <p className="footer-slogan">Tecnología · Rendimiento · Pasión Gamer</p>

          {/* Redes sociales */}
          <div className="footer-redes">
            <a href="https://facebook.com/techstore" target="_blank" rel="noreferrer" className="footer-red" aria-label="Facebook">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
              </svg>
            </a>
            <a href="https://instagram.com/techstore" target="_blank" rel="noreferrer" className="footer-red" aria-label="Instagram">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
              </svg>
            </a>
            <a href="https://tiktok.com/@techstore" target="_blank" rel="noreferrer" className="footer-red" aria-label="TikTok">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V9.05a8.16 8.16 0 004.77 1.52V7.12a4.85 4.85 0 01-1-.43z"/>
              </svg>
            </a>
            <a href="https://wa.me/51999999999" target="_blank" rel="noreferrer" className="footer-red footer-red-wa" aria-label="WhatsApp">
              <svg viewBox="0 0 32 32" width="16" height="16" fill="currentColor">
                <path d="M16 2C8.268 2 2 8.268 2 16c0 2.417.632 4.733 1.832 6.767L2 30l7.425-1.794A13.93 13.93 0 0016 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm6.283 19.45c-.342.967-1.7 1.725-2.308 1.825-.583.083-1.317.125-2.125-.133-.492-.159-1.117-.367-1.925-.717-3.392-1.459-5.608-4.867-5.775-5.092-.167-.225-1.375-1.833-1.375-3.5s.875-2.492 1.183-2.825c.308-.333.675-.417.9-.417l.65.017c.208.008.492-.083.767.575.283.683.967 2.367 1.05 2.533.083.167.142.367-.025.6-.117.225-.167.358-.333.558-.167.192-.358.425-.508.575-.167.167-.35.342-.15.675.2.342.884 1.45 1.892 2.35 1.3 1.15 2.391 1.508 2.733 1.675.333.175.533.15.733-.083.2-.226.859-1.009 1.092-1.342.225-.334.451-.284.767-.167.317.116 2 .946 2.342 1.116.341.167.558.25.641.392.084.141.084.825-.258 1.791z"/>
              </svg>
            </a>
          </div>

          {/* Newsletter */}
          <div className="footer-newsletter">
            <p className="footer-newsletter-label">Recibe nuestras ofertas</p>
            <form className="footer-newsletter-form" onSubmit={handleNewsletter}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Tu correo electrónico"
                className="footer-newsletter-input"
              />
              <button type="submit" className="footer-newsletter-btn">→</button>
            </form>
            {subscribed && (
              <p className="footer-newsletter-ok">✓ ¡Suscrito correctamente!</p>
            )}
          </div>
        </div>

        {/* Columna 2 — Productos */}
        <div className="footer-column">
          <h4>Productos</h4>
          <a href="#productos">Laptops Gaming</a>
          <a href="#productos">Laptops para trabajo</a>
          <a href="#productos">PC Gamer</a>
          <a href="#productos">Monitores</a>
          <a href="#productos">Teclados y Mouse</a>
          <a href="#productos">Auriculares</a>
          <a href="#productos">Componentes</a>
          <a href="#productos">Ofertas y Remates</a>
        </div>

        {/* Columna 3 — Soporte */}
        <div className="footer-column">
          <h4>Soporte</h4>
          <a href="#garantia">Garantía oficial</a>
          <a href="#envios">Envíos a Lima y provincias</a>
          <a href="#cambios">Cambios y devoluciones</a>
          <a href="#pedido">Estado de mi pedido</a>
          <a href="#preguntas">Preguntas frecuentes</a>
          <a href="#reclamos">Libro de reclamaciones</a>
          <a href="#corporativo">Ventas corporativas</a>
        </div>

        {/* Columna 4 — Contacto */}
        <div className="footer-column">
          <h4>Contacto</h4>
          <p>📍 <strong>Tienda:</strong> Av. Wilson 1450, Lima</p>
          <p>📞 <strong>Central:</strong> +51 999 999 999</p>
          <p>✉️ <strong>Email:</strong> ventas@techstore.pe</p>
          <p>🕐 <strong>Horario:</strong> Lun – Dom 8am – 10pm</p>
        </div>

      </section>

      {/* MÉTODOS DE PAGO */}
      <section className="footer-payments">
        <div>
          <h4>Métodos de pago</h4>
          <p>Pagos seguros aceptados en Perú</p>
        </div>
        <div className="payment-icons">
          <div className="pay"><img src="/images/visa.png" alt="Visa" /></div>
          <div className="pay"><img src="/images/mastercard.png" alt="Mastercard" /></div>
          <div className="pay yape"><img src="/images/yape.png" alt="Yape" /></div>
          <div className="pay"><img src="/images/plin.png" alt="Plin" /></div>
          <div className="pay pay-text">Efectivo</div>
        </div>
      </section>

      {/* BOTTOM */}
      <section className="footer-bottom">
        <p>© 2026 TechStore Perú. Todos los derechos reservados.</p>
        <div>
          <a href="#terminos">Términos</a>
          <a href="#privacidad">Privacidad</a>
          <a href="#cookies">Cookies</a>
          <a href="#reclamos">Libro de reclamaciones</a>
        </div>
      </section>

    </footer>
  );
};
