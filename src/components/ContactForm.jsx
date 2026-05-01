import React, { useState } from 'react';
import './ContactForm.css';

export const ContactForm = () => {
  const [form, setForm] = useState({
    name: "", email: "", phone: "",  whatsapp: "", subject: "", message: "", tipo: "persona",
  });
  const [errors, setErrors] = useState({});
  const [successMsg, setSuccessMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    if (errors[name]) setErrors({ ...errors, [name]: "" });
  };

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "El nombre es obligatorio";
    if (!form.email.trim()) newErrors.email = "El correo es obligatorio";
    else if (!emailRegex.test(form.email)) newErrors.email = "Correo inválido";
    if (!form.phone.trim()) newErrors.phone = "El teléfono es obligatorio";
    if (!form.subject) newErrors.subject = "Selecciona un asunto";
    if (!form.message.trim()) newErrors.message = "El mensaje es obligatorio";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setSuccessMsg("¡Mensaje enviado! Un asesor te contactará en menos de 24 horas.");
        setForm({ name: "", email: "", phone: "", subject: "", message: "", tipo: "persona" });
        setTimeout(() => setSuccessMsg(""), 7000);
      }, 1200);
    }
  };

  const FAQS = [
    { icon: "🛒", titulo: "Estado de pedido", desc: "Rastrea tu compra en tiempo real" },
    { icon: "🔧", titulo: "Garantía y soporte", desc: "Cobertura oficial 12 meses" },
    { icon: "↩️", titulo: "Cambios y devoluciones", desc: "Hasta 30 días después de la compra" },
    { icon: "💳", titulo: "Métodos de pago", desc: "Hasta 12 cuotas sin intereses" },
    { icon: "🚚", titulo: "Envíos Lima", desc: "Mismo día si compras antes de 1pm" },
  ];

  return (
    <section className="cf-section" id="contacto">

      <div className="cf-header">
        <p className="cf-label-top">ATENCIÓN AL CLIENTE</p>
        <h2 className="cf-titulo">¿En qué te podemos ayudar?</h2>
        <p className="cf-sub">Escríbenos y un asesor especializado te responderá a la brevedad.</p>
      </div>

      {/* Canales rápidos — como Hiraoka/Coolbox */}
      <div className="cf-canales">
        <a href="https://wa.me/51999888777" className="cf-canal" target="_blank" rel="noreferrer">
          <span className="cf-canal-icon">💬</span>
          <div>
            <p className="cf-canal-titulo">WhatsApp</p>
            <p className="cf-canal-horario">Lun – Dom: 8am – 10pm</p>
          </div>
        </a>
        <a href="tel:+51712321200" className="cf-canal">
          <span className="cf-canal-icon">📞</span>
          <div>
            <p className="cf-canal-titulo">+51 712 321 200</p>
            <p className="cf-canal-horario">Lun – Sáb: 9am – 8pm</p>
          </div>
        </a>
        <a href="mailto:soporte@techstore.pe" className="cf-canal">
          <span className="cf-canal-icon">✉️</span>
          <div>
            <p className="cf-canal-titulo">soporte@techstore.pe</p>
            <p className="cf-canal-horario">Respuesta en 24h</p>
          </div>
        </a>
        <div className="cf-canal">
          <span className="cf-canal-icon">📍</span>
          <div>
            <p className="cf-canal-titulo">Visítanos en tienda</p>
            <p className="cf-canal-horario">Lima · Lun – Dom: 10am – 10pm</p>
          </div>
        </div>
      </div>

      <div className="cf-wrapper">

        {/* Panel izquierdo — temas frecuentes */}
        <div className="cf-info">
          <h3 className="cf-info-titulo">Temas frecuentes</h3>
          {FAQS.map((item, i) => (
            <div className="cf-faq-item" key={i}>
              <span className="cf-faq-icon">{item.icon}</span>
              <div>
                <p className="cf-faq-titulo">{item.titulo}</p>
                <p className="cf-faq-desc">{item.desc}</p>
              </div>
            </div>
          ))}
          <div className="cf-trust-strip">
            <span>✓ Garantía oficial</span>
            <span>✓ Stock real</span>
            <span>✓ Envío seguro</span>
          </div>
        </div>

        {/* Formulario */}
        <div className="cf-form-card">

          {/* Tabs persona / empresa — como ventas corporativas de Coolbox */}
          <div className="cf-tabs">
            <button
              type="button"
              className={`cf-tab ${form.tipo === "persona" ? "activo" : ""}`}
              onClick={() => setForm({ ...form, tipo: "persona" })}
            >
              Persona natural
            </button>
            <button
              type="button"
              className={`cf-tab ${form.tipo === "empresa" ? "activo" : ""}`}
              onClick={() => setForm({ ...form, tipo: "empresa" })}
            >
              Empresa / Corporativo
            </button>
          </div>

          {form.tipo === "empresa" && (
            <div className="cf-empresa-aviso">
              💼 Para compras corporativas te asignamos un asesor dedicado con precios especiales y línea de crédito.
            </div>
          )}

          {successMsg && (
            <div className="cf-success">
              <span className="cf-success-check">✓</span> {successMsg}
            </div>
          )}

          <form className="cf-form" onSubmit={handleSubmit} noValidate>

            <div className="cf-row">
              <div className="cf-group">
                <label className="cf-label">
                  {form.tipo === "empresa" ? "Empresa / Razón social" : "Nombre completo"}
                  <span className="cf-req"> *</span>
                </label>
                <input
                  type="text" name="name"
                  className={`cf-input ${errors.name ? "error" : ""}`}
                  value={form.name} onChange={handleChange}
                  placeholder={form.tipo === "empresa" ? "Nombre de tu empresa" : "Tu nombre completo"}
                />
                {errors.name && <span className="cf-error">{errors.name}</span>}
              </div>
              <div className="cf-group">
                <label className="cf-label">Celular<span className="cf-req"> *</span></label>
                  <input
                    type="tel" name="phone"
                      className={`cf-input ${errors.phone ? "error" : ""}`}
                        value={form.phone} onChange={handleChange}
                          placeholder="+51 999 000 000"
                            />
                              {errors.phone && <span className="cf-error">{errors.phone}</span>}
              </div>
            </div>

            <div className="cf-row">
              <div className="cf-group">
                <label className="cf-label">Correo electrónico<span className="cf-req"> *</span></label>
                <input
                  type="email" name="email"
                  className={`cf-input ${errors.email ? "error" : ""}`}
                  value={form.email} onChange={handleChange}
                  placeholder="ejemplo@correo.com"
                />
                {errors.email && <span className="cf-error">{errors.email}</span>}
              </div>
              <div className="cf-group">
                <label className="cf-label">Asunto<span className="cf-req"> *</span></label>
                <select
                  name="subject"
                  className={`cf-input cf-select ${errors.subject ? "error" : ""}`}
                  value={form.subject} onChange={handleChange}
                >
                  <option value="">Seleccionar...</option>
                  <option value="consulta">Consulta de producto</option>
                  <option value="pedido">Estado de pedido</option>
                  <option value="garantia">Garantía / Soporte técnico</option>
                  <option value="devolucion">Cambio o devolución</option>
                  {form.tipo === "empresa" && (
                    <option value="corporativo">Compra corporativa</option>
                  )}
                  <option value="otro">Otro</option>
                </select>
                {errors.subject && <span className="cf-error">{errors.subject}</span>}
              </div>
            </div>

            <div className="cf-group">
              <label className="cf-label">Mensaje<span className="cf-req"> *</span></label>
              <textarea
                name="message" rows="4"
                className={`cf-input cf-textarea ${errors.message ? "error" : ""}`}
                value={form.message} onChange={handleChange}
                placeholder={
                  form.tipo === "empresa"
                    ? "Cuéntanos qué productos o cantidad necesitas para tu empresa..."
                    : "¿En qué te podemos ayudar? Cuéntanos tu consulta..."
                }
              />
              <div className="cf-char-row">
                {errors.message && <span className="cf-error">{errors.message}</span>}
                <span className="cf-chars">{form.message.length} / 500</span>
              </div>
            </div>

            <button type="submit" className="cf-btn" disabled={loading}>
              {loading
                ? <span className="cf-loading"><span className="cf-spinner" /> Enviando...</span>
                : "Enviar mensaje"}
            </button>

            <p className="cf-privacidad">
              Al enviar aceptas nuestra{" "}
              <a href="#privacidad" className="cf-privacidad-link">Política de privacidad</a>.
              No compartimos tus datos con terceros.
            </p>

          </form>
        </div>
      </div>

      {/* WhatsApp flotante — estándar en todas las tiendas tech peruanas */}
      <a
        href="https://wa.me/51999888777?text=Hola,%20tengo%20una%20consulta"
          className="cf-whatsapp-float"
            target="_blank"
              rel="noreferrer"
                aria-label="Contactar por WhatsApp"
>
                  <svg viewBox="0 0 32 32" width="30" height="30" fill="white" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 2C8.268 2 2 8.268 2 16c0 2.417.632 4.733 1.832 6.767L2 30l7.425-1.794A13.93 13.93 0 0016 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.5a11.44 11.44 0 01-5.833-1.6l-.417-.25-4.417 1.067 1.117-4.3-.275-.433A11.45 11.45 0 014.5 16C4.5 9.649 9.649 4.5 16 4.5S27.5 9.649 27.5 16 22.351 27.5 16 27.5zm6.283-8.55c-.342-.17-2.025-1-2.342-1.116-.316-.117-.542-.167-.767.167-.233.333-.892 1.116-1.092 1.342-.2.233-.4.258-.733.083-.342-.167-1.433-.525-2.733-1.675-1.008-.9-1.692-2.008-1.892-2.35-.2-.333-.017-.508.15-.675.15-.15.342-.383.508-.575.167-.2.217-.333.333-.558.117-.233.058-.433-.025-.6-.083-.167-.767-1.85-1.05-2.533-.275-.658-.558-.567-.767-.575l-.65-.017c-.225 0-.592.083-.9.417-.308.333-1.183 1.158-1.183 2.825s1.208 3.275 1.375 3.5c.167.225 2.383 3.633 5.775 5.092.808.35 1.433.558 1.925.717.808.258 1.542.217 2.125.133.65-.1 2.025-.825 2.308-1.625.283-.8.283-1.483.2-1.625-.083-.142-.3-.225-.642-.392z"/>
  </svg>
</a>

    </section>
  );
};
