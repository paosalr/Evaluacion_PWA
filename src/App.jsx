import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Menu from './components/Menu';
import Footer from './components/Footer';
import ProductList from './components/ProductList';

function App() {
  const [isOnline, setIsOnline] = useState(true);
  const [view, setView] = useState('productos');

  useEffect(function() {
    // Registrar Service Worker
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', function() {
        navigator.serviceWorker.register('/service-worker.js')
          .then(function(registration) {
            console.log('Service Worker registrado exitosamente:', registration.scope);
          })
          .catch(function(error) {
            console.log('Error al registrar Service Worker:', error);
          });
      });
    }

    // Detectar estado de conexion
    function updateOnlineStatus() {
      setIsOnline(navigator.onLine);
    }

    window.addEventListener('online', updateOnlineStatus);
    window.addEventListener('offline', updateOnlineStatus);

    return function() {
      window.removeEventListener('online', updateOnlineStatus);
      window.removeEventListener('offline', updateOnlineStatus);
    };
  }, []);

  return (
    <div className="app">
      <Header isOnline={isOnline} />
      <Menu view={view} setView={setView} />
      
      <main className="main-content">
        {view === 'productos' && <ProductList />}
        {view === 'acerca' && (
          <div className="about-section">
            <h2>Acerca de esta PWA</h2>
            <p>Esta es una Progressive Web App con App Shell funcional.</p>
            <p>Incluye Service Worker para funcionamiento offline.</p>
            <ul className="features-list">
              <li>✓ Funciona sin conexion a internet</li>
              <li>✓ Interfaz rapida y responsive</li>
              <li>✓ Instalable en tu dispositivo</li>
              <li>✓ Actualizacion automatica de cache</li>
            </ul>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
}

export default App;