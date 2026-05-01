import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Banner } from './components/Banner';
import { ProductList } from './components/ProductList';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';

function App() {
  // Estado para el carrito siguiendo la lógica de clase
  const [cart, setCart] = useState([]);

  // Función para agregar al carrito (basado en .push de clase pero para React)
  const addToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.title} agregado al carrito`);
  };

  return (
    <div className="App">
      {/* Pasamos el tamaño del carrito al Navbar */}
      <Navbar cartCount={cart.length} />
      <Banner />
      {/* Pasamos la función de agregar a la lista de productos */}
      <ProductList onAddToCart={addToCart} />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
